import { Link as NormalLink } from "@chakra-ui/layout"
import { useRouter } from "next/router"

export default function SmartLink({ to, children, ...rest }) {
    const router = useRouter()

    return (
        <NormalLink href={to} onClick={(e) => {
            e.preventDefault()
            router.push(to)
        }} {...rest}>
            {children}
        </NormalLink>
    )
}