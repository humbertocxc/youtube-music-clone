import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface PageProps {
  name: string,
  url: string,
  icon?: boolean,
}


export default function Page({ name, url, icon }: PageProps) {
  const [search, setSearch] = useState(false);

  function clickSearch() {
    setSearch(!search);
  }
  
  return (
    <a href={url} onClick={clickSearch} >
      {icon?
        <AiOutlineSearch size="20px" /> : <></>
      }
      {name}
    </a>
  )
}