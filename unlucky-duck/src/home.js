import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div class="center">
            <h1>homepage for my game dev site</h1>
            <p>not sure why you here but hello anyway<br/>check out my game things</p>
            <Link to="/unlucky-duck/tower-dropper/">tower dropper</Link>
        </div>
    )
}