const Layout = (props: React.PropsWithChildren) => {
    const { children } = props
    return (
        <div className="flex flex-col p-10 pt-20">{children}</div>
    )
}

export default Layout