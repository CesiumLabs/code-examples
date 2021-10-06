import fg from 'fast-glob';
const getCode = () => {
    const entries = fg.sync("codes/**/*");
   return entries;
}

export default getCode;