function LoginScreens() {
    // const [email, setEmail] = useState('');

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-mono">
            <div className="flex flex-col items-center justify-center w-1/3 p-8 bg-white shadow-lg rounded-lg">
                <h1 className="mb-10 text-[25px] text-violet-600">Login Usuário Cadastrado</h1>
                
                <form className="flex flex-col gap-4">
                    <div className="mt-4">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Digite o seu email"
                            className="border-gray-300 border-2 rounded-md p-1 w-76"
                        />
                    </div>
                    
                    <div className="mt-4">  
                        <label htmlFor="password">Senha:</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Digite a sua senha"
                            className="border-gray-300 border-2 rounded-md p-1 w-76"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <button 
                        type="submit" 
                        className="text-center justify-items-center mt-4 w-25 bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded"
                        > 
                            Entrar
                        </button>
                        <button
                        type="submit"
                        className="underline text-[11px]"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreens;