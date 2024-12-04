import RootLayoutClient from "./layout.client";

export default function Layout({ 
  children 
} : { children: React.ReactNode}) {
  return (
    <RootLayoutClient>{children}</RootLayoutClient>
  )
}