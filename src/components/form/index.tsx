import { FC } from 'react'
import { useForm } from 'react-hook-form'
import bgimg from 'assets/img1.jpg'

const Form: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any): void => {
    console.log('data', data)
  }
  console.log(watch('username'))

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register('username')}
              placeholder="username"
            />
            <input
              type="text"
              {...register('password')}
              placeholder="password"
            />
            <input
              type="text"
              {...register('confirm password')}
              placeholder="confirm password"
            />
            <input
              type="text"
              {...register('mobile', { required: true, maxLength: 10 })}
              placeholder="mobile number"
            />
            {errors.mobile?.type === 'required' && 'Mobile Number is required'}
            {errors.mobile?.type === 'maxLength' && 'Max Length Exceed'}
            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgimg} alt="background image" />
        </div>
      </div>
    </section>
  )
}

export default Form
