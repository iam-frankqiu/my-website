type Props ={
    href: string,
    children: string
}

const Link = ({children, href, ...props }: Props) => {
    return (
        <a href={href} {...props} className="blue" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default Link