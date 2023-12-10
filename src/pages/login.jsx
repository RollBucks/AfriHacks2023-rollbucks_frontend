import logo from '../assets/icons/logo.svg';

export const Login = () => {
    return (
        // <div className="h-screen flex items-center justify-center">
        // <h1 className="">Login</h1>
        // </div>

        <div className="h-screen flex flex-col items-center bg-white-500">
            <div className="flex flex-col justify-center p-9 w-md">
                <form method="POST" className="flex flex-col w-sm">

                    <img src={logo} alt="Rollbucks Logo" className="w-24 self-center" />

                    <div className="my-12"></div>

                    {/* Form Header */}
                    <div>
                        <div className="flex items-center">
                            <h2 className="text-3xl font-display font-semibold">Hey, Welcome Back! </h2>
                            <span className="text-4xl">👋</span>
                        </div>
                        <div className="my-1.5"></div>
                        <p>Enter your details to gain access to your account.</p>
                    </div>

                    <div className="my-6"></div>

                    <input
                        type="text"
                        placeholder="Email"
                        className="px-4 py-3 rounded-md text-sm font-body bg-white-500 shadow-sm border border-white-600"
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <div className="my-2"></div>

                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-md bg-slate-100 text-sm font-body bg-white-500 shadow-sm border border-white-600"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <div className="my-7"></div>

                    <input
                        onClick={() => { }}
                        type="submit"
                        value="Submit"
                        className="mt-2 p-4 rounded-md font-display text-sm text-white-400 bg-black-400"
                    />
                </form>
            </div>
        </div>
    )
}

function Separator(props) {
    let x = props.x ? props.x : 0;
    let y = props.y ? props.y : 0;

    return (
        <div className={`m-0 mx-${x} my-${y}`}></div>
    )
}