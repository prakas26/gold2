import NavbarComponent from "../navbar";
import FooterComponent from "../footer";

export default function Layout({children}){
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  )
}