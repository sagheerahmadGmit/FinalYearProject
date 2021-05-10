// as we will update the data live, in order
// to not update it for every character we
// use the debounce function to update the
// note when the user stops writing for 1500 seconds
export default function debounce(a,b,c){
    var d,e;
    return function(){
        function h(){
            d=null;
            c||(e=a.apply(f,g));
        }
        var f=this,g=arguments;
        return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
}

// remove html tags for the preview in the sidebar items
export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
};
