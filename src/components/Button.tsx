
type Props= {
    children: string;
    size?:"small"| "medium"|"big";
};



export function Button({children,size="medium",...props}:Props){
  
  let style: any = {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    margin: "0.2rem",
  };

  if (size === "big") {
    style.paddingTop = "2.5rem";
    style.paddingBottom = "1.5rem";
  }

  if (size === "small") {
    style.paddingTop = "0.5rem";
    style.paddingBottom = "0.5rem";
  }
    console.log(props);
    return (
      <button className="button" style={style}{...props}>{children}</button>
    );
}