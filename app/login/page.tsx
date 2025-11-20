export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-md p-2" />
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}