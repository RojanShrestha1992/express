export function login(){
    return (`
<form action="/submit" method="post">
            <input type="text" placeholder="enter name"/>
            <br/>
            <input type="password" placeholder="enter password"/>
            <br/>

            <button>Login</button>
            <a href='/'>go to home</a>


        </form>
        `
    )
}