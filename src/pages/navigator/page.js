import React from "react";
import { Avatar } from "../../components/avatar";
import './page.css'
import she from '../../img/she.png'

/**
 * Navigator Page
 */
const Page = () => {

    function prev() {}

    function next() {}

    return (
        <div className="page navigator">
            <header>
                <Avatar person={{ name: "Adam Smith", date: "1960 - 2011" }} />
            </header>
            <header>
                <Avatar person={{ name: "Isabelle Smith", date: "1960 - 2011", src: she }} />
            </header>
            <header>
                <Avatar person={{ name: "Phillipe Smith", date: "1960 - 2011" }} />
            </header>
            <main>
                <Avatar person={{ name: "Mary Smith", date: "1960 - 2011", src: she }} onPrev={prev} onNext={next}/>
            </main>
            <footer>
                <Avatar person={{ name: "John Smith", date: "1960 - 2011" }} />
                <Avatar person={{ name: "George Smith", date: "1960 - 2011" }} />
                <Avatar person={{ name: "James Smith", date: "1960 - 2011" }} />
                <Avatar person={{ name: "James Smith", date: "1960 - 2011" }} />
                <Avatar person={{ name: "James Smith", date: "1960 - 2011" }} />
                <Avatar person={{ name: "James Smith", date: "1960 - 2011" }} />
            </footer>
        </div>
    )
}

export default Page