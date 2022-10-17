import {useForm} from "react-hook-form";
import {authService} from "../../services";

const Register = () => {
    const {register, handleSubmit} = useForm();

    const submit = (user) => {
        authService.register(user)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='text' placeholder={'password'} {...register('username')}/>
            <button>Sing Up</button>
        </form>
    )
}

export {Register}