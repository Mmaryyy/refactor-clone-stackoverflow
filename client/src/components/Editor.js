import MDEditor from '@uiw/react-md-editor';

export const Editor = ({ value, setter, focusFunction, height }) => {
  // const [value, setValue] = useState('')
  return (
    <div className='editor_container'>
      <MDEditor
        value={value}
        onChange={setter}
        onFocus={focusFunction}
        preview='edit'
        height={height || '500px'}
      />
    </div>
  );
};
