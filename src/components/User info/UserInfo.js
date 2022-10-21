import css from './UserInfo.module.css'


const UserInfo = () => {
    return(
        <div className={css.userInfo}>
            <img className={css.userLogo} src='https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp'/>
            <p className={css.username}>Hello Okten!</p>
        </div>
    )
}

export {UserInfo}