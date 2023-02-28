package com.preproject_009.config;

import com.preproject_009.auth.CustomAuthorityUtils;
import com.preproject_009.auth.JwtTokenizer;
import com.preproject_009.auth.filter.JwtAuthenticationFilter;
import com.preproject_009.auth.filter.JwtVerificationFilter;
import com.preproject_009.auth.handler.MemberAccessDeniedHandler;
import com.preproject_009.auth.handler.MemberAuthenticationEntryPoint;
import com.preproject_009.auth.handler.MemberAuthenticationFailureHandler;
import com.preproject_009.auth.handler.MemberAuthenticationSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors().disable() // 수정
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                                // 로그인
                                .antMatchers("/login").permitAll()
                                // 멤버 생성
                                .antMatchers(HttpMethod.POST, "/api/members").permitAll()
                                // 멤버 수정
                                .antMatchers(HttpMethod.PATCH, "/api/members/**").hasAnyRole("USER", "ADMIN")
                                // 전체 멤버 조회
                                .antMatchers(HttpMethod.GET, "/api/members").hasAnyRole("USER", "ADMIN")
                                // 멤버 조회
                                .antMatchers(HttpMethod.GET, "/api/members/**").hasAnyRole("USER", "ADMIN")
                                // 멤버 삭제
                                .antMatchers(HttpMethod.DELETE, "/api/members/**").hasRole("USER")
//                        .antMatchers(HttpMethod.DELETE, "/questions/**").hasAnyRole("USER", "ADMIN") // 질문 삭제
//                        .antMatchers(HttpMethod.POST, "/answers/**").hasAnyRole("USER", "ADMIN") // 답변 좋아요
//                        .antMatchers(HttpMethod.DELETE, "/answers/**").hasAnyRole("USER", "ADMIN") // 답변 삭제
                                .anyRequest().permitAll()
                );
        return http.build();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {

            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);

            jwtAuthenticationFilter.setFilterProcessesUrl("/login");

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);

        }
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
