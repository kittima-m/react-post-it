import classes from './ErrorElement.module.css'
import { Link } from 'react-router-dom'

export default function ErrorElement() {
    return <>
        <div className={classes.container}>
            <p className={classes.title}>Oops !! You should not be here</p>

            <p >Let me bring you back</p>
            <Link to="/" >
                <p className={classes.backBtn}>Go Back</p>
            </Link>
        </div>
    </>
}