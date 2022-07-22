import Link from "next/link"
import { Container, List } from "./styles"


export const Nav = () => {
    return (
        <Container>
            <List>
                <li><Link href="/">News</Link></li>
                <li><Link href="/">Calendar</Link></li>
                <li><Link href="/">Contacts</Link></li>
                <li><Link href="/">WorkShop</Link></li>
            </List>
        </Container>
    )
}