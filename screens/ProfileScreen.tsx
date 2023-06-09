import { View, Image, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import CustomInput from '../components/CustomInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import SubmitButton from '../components/SubmitButton'
import Header from '../components/Header'

interface FormData {
  name: string
  address: string
  swap: string
}

const ProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {},
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // login
    //   ?.mutateAsync({ ...data, platform: 'web' })
    //   .then((res: any) => {
    //     updateUserInfo({
    //       _id: res._id,
    //       name: res.name,
    //       token: res.token,
    //       email: res.email,
    //       role: res.role,
    //     })
    //     setAuth(true)
    //     navigation.navigate('HomeBottomTabs')
    //   })
    //   .catch((err) => {
    //     showMessage({
    //       message: err,
    //       type: 'danger',
    //       icon: 'danger',
    //       duration: 5000,
    //     })
    //     console.log('❌❌❌❌❌❌: ', err)
    //   })
  }
  const isLoading = false

  return (
    <Layout>
      <View className='flex-1'>
        <Header />

        <View className='mx-4'>
          <View className='mb-5'>
            <CustomInput
              control={control}
              rules={{
                required: 'Name is required',
              }}
              errors={errors}
              customClassName='border border-t-0 border-l-0 border-r-0 border-primary'
              name='name'
              autoFocus={true}
              placeholder='Enter your name'
              keyboardType='default'
              textContentType='name'
            />
          </View>

          <View className='mb-5'>
            <CustomInput
              control={control}
              rules={{
                required: 'Address is required',
              }}
              errors={errors}
              customClassName='border border-t-0 border-l-0 border-r-0 border-primary'
              name='address'
              placeholder='Enter your address'
              keyboardType='default'
              textContentType='addressCity'
            />
          </View>

          <View className='mb-5'>
            <Text className='text-lg'>Change your (workplace) barbershop</Text>
          </View>

          <View className='mb-5'>
            <CustomInput
              control={control}
              rules={{
                required: 'Swap is required',
              }}
              errors={errors}
              customClassName='border border-t-0 border-l-0 border-r-0 border-primary'
              name='swap'
              placeholder='Select other barbershop'
              keyboardType='default'
              textContentType='name'
            />
          </View>

          <View className='mb-5'>
            <SubmitButton
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}
              buttonText='Update'
              customClassName='p-4 bg-primary rounded-full'
              textClassName='text-gray-100 font-bold text-center text-lg'
            />
          </View>
        </View>
      </View>
    </Layout>
  )
}

export default ProfileScreen
