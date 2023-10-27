// "use client";

// import { Header, Footer, ScreenSize } from "../landingpage/components/"
// import { usePathname } from "next/navigation";

// export const DefaultLayout = ({ children }) => {
//   const currentPath = usePathname();

//   if (currentPath === "/login" || currentPath === "/register") {
//     return (
//       <>
//       <ScreenSize />
//       <main>{children}</main>
//       </>
//     )
//   }

//   return (
//     <>
//     <ScreenSize />
//     <div className="max-w-5xl m-auto flex flex-col justify-between min-h-screen">
//       <div>
//       <Header />
//       <main>{children}</main>
//       </div>
//       <Footer />
//     </div>
//     </>
//   )
// }
