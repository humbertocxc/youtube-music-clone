import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

interface PageProps {
  name: string,
  url: string,
  icon?: boolean,
}


export default function Page({ name, url, icon }: PageProps) {
  const showText = useMediaQuery({query: '(min-width: 1130px)'})
  const [search, setSearch] = useState(false);

  function clickSearch() {
    setSearch(!search);
  }
  
  return (
    <a href={url} onClick={clickSearch} >
      {icon ? <AiOutlineSearch size="20px" /> : <></> }
      {!icon || showText ? name : <></> }
    </a>
  )
}