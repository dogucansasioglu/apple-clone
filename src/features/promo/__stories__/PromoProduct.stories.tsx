import { Tab } from '@headlessui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PromoProduct, { IPromoProduct } from '../PromoProduct';

export default {
  title: 'features/Promo/PromoProduct',
  component: PromoProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PromoProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PromoProduct> = (args) => (
  <Tab.Group>
    <Tab.List className="flex justify-center bg-promo-dark p-5">
      <PromoProduct {...args} />
    </Tab.List>
  </Tab.Group>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  product: {
    _createdAt: '2022-09-15T15:50:20Z',
    _id: 'c829d634-30db-4168-8fa1-0822f8035807',
    _rev: '7QRoBHgb4U1Nb3n6kZG2YV',
    _type: 'product',
    _updatedAt: '2022-09-22T14:51:27Z',
    category: {
      _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
      _type: 'reference',
    },
    image: {
      _ref: 'image-fc281dacd18efa736854b43f974404da94222e5c-640x800-webp',
      lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAGnElEQVQ4jaXRWWwcdx0H8AHxhsjuzs7OfR87M3vPzu56bcd2HB+xYztOYtokjp3LTlqHXORyCZCWNJcghEJUqcKbByQeUhTaiioFKs5GSiUiVELV8oBUQOCsm6QSyr5ktuL/RREK4p2f9H34vnwevj/KdtwfK7r7gazn/6GYtb8rZnVZNfLLmu7etQ2rWXbSzd5ssVnP1laC3JqVXGFwxc30rDje6hXH7fvY9bpvFgod0/3dnZ8PBzIUparWh6Lo/VNSapFkjDwSrY0Rb4xEvFKNVMmJ6qYTjedqUW9hXRQUt0aZwva26W1uK/ZYJBkDnypm/W9uJjzV3d8rzh44+DnKVPRlT3TaZbWMuj2IDn8KGW8Kst4HRfIRaDb63DJqmbUoZSdQ8jeg4AzDN3pIWq3BN4KHgVt8o14I9taCsJ/yVGO5S/Wip9JVHO0YJs+tnSJTtRHiaXlisBrxeZUURJMEcpp0qi6ZNDNkv10iB7SAzGtlbNNK7SHFv1dV7PfylvsalTcLdzcXNkbnRo7gxpfOk188dwGLm7aiojkoMQq6WQs9zONoGGJFHNI0NKw8aWgVfFOtkYNSkYyyFsqsGvmKsUwVnVpzYWAxun7oDfz5e7fIn678BOe3L6DfzGBUcDCnl3DIqeFguopn7RxOGA4uqh4uqFmyqHqYEU3Sx0goMELbk7V7lGtkmjsHjkbXjv8W73/nffLumR/h9MQspmwPx3JZXB1dgxs7JvGrXRtxbbwXizkfuyQTJ1SbnLEtzOky6eJT8FJs21HU+5Qiqc3e0lh0ducS3vrqT8m1A5dxeM0YDmbzeH1iAB+d3o1PruzDvXOb8PPpKhYyJjaxJr4hFrFkVnDC8Em/IMJOsW1dVh5QgiA0NcmONnRvwYWd58m3Zxaxu74WXy5U8Lst2/Do7BE8urwDfznRg8agg62KjBkmje8KdfxAXYNLejfZK+URckpbewLSdDLSZRtj9QnyzNA0JoIubHTzeHVsAz45vgMPTq3HrdkAF4s6trMKjqSyuCr14FVjHV7zJ8lSdhwzdrXtaeZ/wHg8EcXjDFTJI6HbibyVgyvKmC8X8LOZYdxZWIsbY0VctFTsT2o4y5ZxXV+HX+aexrud8+Q3vXtxLljf7jT9BxTP8814PB6titGI0ypJcT5Y3kaSZuALHObCDK4MhrhazeBbkoKvczYaTj/e6ZzGH4bncWd4N7nZNYXLfnd72HD/F0wiljRJgishyblIJBgwsTiyLIcJTcM+VcdhTsZZN4s3Rzfg9swevDc7gzsbRsmtagUvW257o249AemIpnWwwmqSUobBiCUkEilwsTjS8RTCBI96QsAgI+J0xcPNPf24vX8Cb31xENd7quSHmQxOa1Z7+PGGj0GWUSJDGYDrzBPFmkZKqiJFc8gnBKxnbAzTBqoxEXVaxGLJwu35Ej462Ym3t1VxKfDJs5KJUU5t52X18VOkpiqGUeDOoZb/GvHcBYhyF5SkgJGUgZNiBYe5EsYTBvoSMo74Jt55ykPzeA5/PV7Am+MuOWhICJNsWxXFB5Qo6k1N7ouK6TnUMkdIwd0HXemFxYgYYWUclfJ4QapgP5vDJG1iwTbw+loTHz5tYOWQgw/mbPJiSUDIJNuSIDygeMFscnwt0uT1SOubiatPQpcqMJI8qkkGk5yEZ0QHh4UsZhkXc4qB7wcK3q6K+PWgjGsjEtnlMfCSdFt5DHKCdTeeykdxtg5O6COq2AOVy0BNsPDjNOrJJEZYFlt5BbO8gT2SjjOmhMsqh0WFwxYlRUKGhh6n2yov3Kc4wV6OMflHq1IdhOZ7/yUJ3UTjfKInOOLHkqSaYMggw5BphSNHsypZzBjkK4ZKDosy2cyIpCvGk8wXGGLEmEjjhHsUy5vL8aTXjjMBRK6GtBjC423Y8RTyq2isiSexlUvi+ZKAV4ZtvFi1cMrW8HzaxH7DwAQroSPGIh1jPtVY4T7Fi8bvacb6mGXcls15D6ui3QpFpeUl2VYQp1tDNN2aUZKtF7rl1qURt7U3Z7Z2qnJr0Tdbx7J2a4uuPFzNsC03kbqvc8IfKd1IH5Mk6yVNtpcyqrVU082lqmk2cqrWKEpyo0uWGkOW1NhSMRrbOtxGn202VqtqYyJtNjZlnKUhx1iqyNKSzQsvGYp6kgrDkCvk80ZQKqYr5cDtCEO3s1Zz67UOtxqGbqVcdsvlwA3LgVsuldxSofjflAtFNywW3VIul/Y9z8zmchz1/16MoijxSfnsZ6h/A02h+FEqcV1mAAAAAElFTkSuQmCC',
    },
    price: 799,
    slug: {
      _type: 'slug',
      current: 'ipad-pro',
    },
    title: 'iPad Pro',
  },
} as IPromoProduct;
