import { ComponentMeta, ComponentStory } from '@storybook/react';
import Promo, { IPromo } from '../Promo';

export default {
  title: 'features/Promo',
  component: Promo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Promo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Promo> = (args) => <Promo {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  isStorybook: true,
  categories: [
    {
      _createdAt: '2022-09-14T21:43:58Z',
      _id: '382389ea-cfd8-437d-9598-b0f1c1110c92',
      _rev: 'u9maGu4Yn6y5wrt8IgmboJ',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:58Z',
      slug: {
        _type: 'slug',
        current: 'ipad',
      },
      title: 'iPad',
    },
    {
      _createdAt: '2022-09-14T21:43:37Z',
      _id: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
      _rev: 'ElPIeN5GV71YJ1OCqgEawH',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:37Z',
      slug: {
        _type: 'slug',
        current: 'apple-watch',
      },
      title: 'Apple Watch',
    },
    {
      _createdAt: '2022-09-14T21:44:08Z',
      _id: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
      _rev: 'u9maGu4Yn6y5wrt8Igmc4J',
      _type: 'category',
      _updatedAt: '2022-09-14T21:44:08Z',
      slug: {
        _type: 'slug',
        current: 'iphone',
      },
      title: 'iPhone',
    },
    {
      _createdAt: '2022-09-14T21:43:47Z',
      _id: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
      _rev: 'ElPIeN5GV71YJ1OCqgEbZf',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:47Z',
      slug: {
        _type: 'slug',
        current: 'mac',
      },
      title: 'Mac',
    },
  ],
  products: [
    {
      _createdAt: '2022-09-15T15:32:18Z',
      _id: '15238484-cbe7-4d20-9f09-676a9e4c34dd',
      _rev: 'pgQli4bAGTpkL1eywNusAN',
      _type: 'product',
      _updatedAt: '2022-09-22T12:54:23Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-94db346e4f3d9bd41bc9ee902d141492d25bb45f-600x500-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAE20lEQVQ4jY3M6U8TdhjA8WeaHqT0ApFC5ehFpKCLDGQKInQwp4DlqICVtrSUXkKhlFvKpFxj4jE0QxTjpBRFRWUOxzSbFZmowHQSJWpoxGTbfwCajN+zoNve7M2+ySd58jzJA2KfUBDTw0DMF4JobTiI14SCmBcK4jAhiEQSEIki3hGLI0AiWiEBiUAC4lARiPjhIOCFQnhQCAgZgSBkB8O/+az1AWCuDH/7v30AAPRV/93zgnmrWP4sOp3tw6Sy6Swqg86iUagsGoXCotIoLCqVyqL8g0ZjUXxoLCrDh+nD8qVz/f1W3r6vgW+EWp4JNgdv4u7gJ6UpQlMte6WflhekyK15uYXWPXkaa0G+xqrMV1tV+WqrRlFoVcn3WgvTFNa8zbvMu6SJqfGCDZymGCUcTNQC/B7zEOaj70N6cKq4QlB8rCuy6nnvlvrXvaq2Vyda+xZOdA8s9Bx3LfQdP7fQ3312wX24b8HV3PPqm7Ku1ycU9c/rt2uO5kSniJf234A/az0AmISA8Qh5wQppu6hp8PKGU289W/pxomAIxztv453Lv+DE6COcuj6NT67dx6dDd3H21E18fHAYPSU9b09l1g7q4+RSPI2ALgTAOATchJDFU0odYZ3ucxFDi2Mbv8W7W0eWH+TfIlMd0+TxhVny7OIj8tI1Seb7POTlodHlFzUX8aH+9OK5rEa3KT5HikMIOIwAf0QgvJAgpAUUSi1BXe7OkCtLZwQ/4CXJDTK2cYyMZ4+T6eYHZLZ7nMwd+p7MOa+SZ1WD5KmpH++pepfOZjjcxthcKZ5FwH4EuBuCcCsEYZu/Srov4IjbHjiy1Mzz4JdBHnJy3R28FD2BnrwJfFw9hs+qh/Fp2QV8ohsgvyrP43h2/9LplA63PlopRQcCtiDAmUCEXi5CrN8+aYb/oQGV//CS3u9HNHDGSTlnkrQGPiCuDyeJJ/MmmVGMkCn5NTK5c4T8LBvD0fjRpWNRPQOqsBIpyhBwNwI0cREcUW8gip0XmcRtdaVzXYuZ3GuYwf5uOYv5E1Ez75P6gBnSK5wmVyOnyPX102QkYmb5imAWz/CnFg+sHXTJuaWR3o8QMAwBtMG/AQUQooLkUbEBFYNb13S82brmKMb7H8Mtfr0o45zHbPYoGji3sZFzDzs4D7GDPYVO1gxWsu68UXL6BpMDzFEICFe4CKCUHYbOo07aZ7K9cfGRypNxouK5WKHBGyM0zMcILd54QZU3Wej07gzv8ipCur1q/tdeNb9nvoDf45WvOzK3Q1J/Up5sjGv/qo5mTRgDMGht0NrawTAYytZn7lJmp27fY5QlKSyy7XvMsqQ8S2qy0pL+ic6SKTNYMpMMlqxE0wpzZoLJkr6txJizsyTbZLCtb2lrY5iL6gCqqm3gbG5f3ej4nF5ZXcHYX6H33V+u8y2t0DFXlFXqmLa6YmZ5vYZpqM5naqtymVp7LrO4MsfXZM/3tdVaGI1NTfTm5vbV9hozQJldA07nF9DgaACLvQDUZYmgKv0YNO/EgqZiE2gbNoLygBh2VAdAQhUTEqp8IcXOgAw7D3R1aVDfVAMtzZ1grNkNUGmzg9PZDrV1jWAyl4JGWwzqIh1oiorfKdLpocRohhKDGbS6EtAU6d/fNMVQpNWD2WyFujoHOJ1tYLPZ4C/ArA4mD1g0zQAAAABJRU5ErkJggg==',
      },
      price: 999,
      slug: {
        _type: 'slug',
        current: 'macbook-air-with-m1-chip',
      },
      title: 'Macbook Air with M1 Chip ',
    },
    {
      _createdAt: '2022-09-15T15:33:01Z',
      _id: 'be62f55a-4148-4825-9263-ae4b11d5a660',
      _rev: 'pgQli4bAGTpkL1eywNvmKt',
      _type: 'product',
      _updatedAt: '2022-09-22T13:01:20Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-130c04a9b9a3f25552c77e44398055622a3972f6-1200x1000-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAE6ElEQVQ4jR2Q609bdQCG383NscLaskIHpYW20NKWclp6odfTltN76emNXrivlwhjbLgpG+MWmbsoi3E3s7JFMx3TuanxgzEzmvhn7EOd/4B+Es1gSzg/A2/yfHvzfHigNi4CWINAKIPWyCJaWMLwqSvIlhfgT5TQa/ZB3eOAUtMPkViBTi2D5NhHyJc/hZOZREeXAXyBEMcER9Cu1AP24GMABI0iNSyeIoYqVxArzIKyxyHtNEMgFKGurgHAkX2UGgb+5GU4/Beh0sfRKtWALxRAIhWiVaoCWmQOHOU70SiSHm5X9jVrDB55d69dqVAbFW0dGkWTWKIQCEWK+mNCBa9eqGhu6VKodN49lFJ5r7z5hKxJ0Hj8kKBRAFGzBBC10gDqcIzf3CrrtJVszMSd+Mi7G8mx2epAbLiqN3mrGspV1Rmc1Za2rqpMYaoygzP34vn5DasreVum0E4IhI3io7zDkMi6gAOH5dgbj8fvaZb0fGnxFv+emLvz78L611vnL9/fGple28pWVrfy5UtbJnt4q1NLb+VLa/8sXNv8r1Cc/0tnsD/gC4+r9hxdWjPQ3KrZF0qkCoNEpv1OpQ++CWQWyemVb8jq7edk6dYvZPXe7+SDz34m2dIyofpZkhx+n1y99S05v3zjtdMXeXy8qUVz8G0+HD4WKM5ex8sdAhsdoWzu2FPKHNzupqKkz13cZZKXuHTpE66y+Ig7d+0pN3n2JucJVzinb3g3P/keGS7OvbLRwU1xa7umXW2EN5IDZi5u4M9dAqszSNH+zDOHb2inxxgmym4v16kLELUxQXodo8QZmiJ+9jTxhcvE5s5wRmuE6Aye7Y5O/aZILNFIlTqo9Q4gkJjGmcs/QUfZKMrsfUZZAjuUNUaczAgXTM8SevAsMXqmiNk7TdzBaUIHJkm/O82Z7DFCmZltpdqw2XSiTSNXG6Dr8wBtcv1+w3ZFt0Em1z5T6107gfQMmVmpcgvrT7iZxYdc8fwXXHn+IZd7Z51zh4qcOzDKjU8tkomp+W3XQHSzVSrXdKgMCLCjwIFDLfvChgZhr1jS/dQWmNyeWn1IPth4vrt290du5cYTbv3+b9y1+79y6dIy12tLcJnJpd2rd78nc4vrrxye8KNGkbhbLOmA3TcItKuSWP545YCoqc0sVzl/8LFn34zN3SSVC7dI+dx1Uj6zRi58+IDMLt0kJleEKLU0SU2sktOX7hE2d+q1Rm95Im6R6AkhUPdYAId3BJFktqG3z+HXUfRXFlfyhTuQ/8Mbzte8oUzNG0zVYpliLRgfqWn15ppaZ6u5mELNGx59abL5X2h6+j6nTDaazY7XGy1OgIlkEGKzfDcTMVrs3qypny6bbXTF6vBULHZPxeZmKh5/rEIz0YrVQVdM/e6Kxe6rmG3eSp/VVbbY6SGaiVLRZKFhIBgDBlMswmz2rVA8czQYYxuCsWh9hE3wookUbzA1xEsXRnm5sQlebuwkLzt6kscOZXnheJQXjsf2PvURdqghzGbrIoncwfHKNDCYTiIYzyIYzyAQC8PDOED7nKC9bvj8DMJsHLFkHGwmg8JkCclcGrTPCofbDCYc3MuFMJvbJz9eAuKZkX0hE0nCG4rDF4qDiSTgj6YQGEwjlh5GZrSMzEgJ0VQBgVgK/mgSA5EEfCF2H380jXAih1R+Av8DMG6aEEZFQZIAAAAASUVORK5CYII=',
      },
      price: 1199,
      slug: {
        _type: 'slug',
        current: 'macbook-air-with-m2-chip',
      },
      title: 'Macbook Air with M2 Chip',
    },
    {
      _createdAt: '2022-09-15T15:34:29Z',
      _id: 'ee17fd28-3588-4afc-b480-17cc8055f71e',
      _rev: 'pgQli4bAGTpkL1eywNvoIF',
      _type: 'product',
      _updatedAt: '2022-09-22T13:01:31Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-11ef283f663146b87bc0a1054f7821af6047c208-600x500-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAE+0lEQVQ4jS3Ra0yTdxTH8V8YxEytMlYphfZpOy4CYrWFVkA3J7vBhkhEBUVKuShXBXSADJFyKbTFtvDQ0lImDhABgSJIwAts4KVTnI45dWoy2LtlJouYvQENz38BPCffnHefNwfZ+BJLQ63hws+ZgsTFB3K3QIRslCFYEo4QaTjk0nCESsIQtjUU27fIsUMsw/bAEMhEmxHgLgLflQMCB4zBmcBOiJZBzvts8MCG93vu8BFQEISLIdgihsgnAN6+/vD184ffRn/4+21EgK8f/L394cP3AY/thQ2sD7AKFPZu+hrgsjhYBRcIeJQL34PH5nvwKMqLL6QEAiFFCYQU/92lBELBcpRQwKeEFI8v5HnyKE8PLpvL8XBxhjM2uH4IdPLUuIpahPGl3GjeruTDwmh9qjiuMTlSQSsOHqUViRm08tAROu1QOn0kIY3OjE+hs/Yr6cxYBa38bJ8+RhqRHOot5v4XeRFXDusBIiNY2j2irzYX+xxts24qf9m5Xfe6I9nyqk3dPddm7p+70NQ7193YM9dff3FuSN8+N6T94dVgecvrjkztP6qojLZ94ojNhBCQCQKQ0BXwwEdxkhrfM/bL4tY3t7ddIo7dg8RxapL83PaQ3LdPk18vPSCPLzjIs7ZJ8sw2Rv7QDxPHyda3LXtPDaSFREuX/rCEgvBXwFgqQVIqUPe3+/XMXwsaJpNbryw6IseY+6VTzHTrNPO4dYp5ZplgXtDXmed1w4vPz/SSe1nW+XMxRfZ02e4VkFkCV62AUV4HJblcbb+BN7DQIbpBBnyuMlc3jZGbMXfIL2X3yKO6CfJEPUyequzkaUkP8zSvgzgUpgVbVKE9NThmBXy5BL7bTz0SJYfZZ/uKNgwvVLvfIvXcSeY8b5IMiO+Qmwm3yXThKHlS2Eue5HWRx1mdzO/KDnIzzrpg2VViV26JXQGnCDCFZRWhnERJ9Ad1fcmuwwsZ6x0kd/1dptTtLkN7TjF9Mgfj2D/KPErqY35L6GUexvUy92P6yPXP2xdoeaVdERAfjECANBHABoI2f4Ig1zjxx+uqeqPX9czvZY2T/WtuLyatucfkr3vA6LgPmJ6gO8y4/CdmQjbB/Bg8uTgmvUX6g0bna0V0/wEPhYRUExARAXTxf+P8yHfOO4IObgvjnry8k2N4E+FuI1+w28k3bn0kzm2IpLFHSKnnNWKkrpMmwY3lLIIxoucNvj3hZbwSH5gZfqwz2fnfJAKY9BecLM0W96wjhTExETndkdtOvIiUF/0VJS+Z3R1SPrtHWjUbJ1XPJkm1M1nB+pl8mXGmQG7884SsfuZ4iO750U9Ke/JSS2LrLTSnRdvtBIulxYlubHKvqKwNP36sKDE9NT8rLSU/ZzllQU5qUv5y6UkFORmKk9k5yqLsYynF2bnK4uzclKLMgpySQxWqmvB62sShaasTmpubYTDSznpjw+p6k5FlNOtYRpOWZTRpWHpTNUtHq1haupyloctYNeYyVq1FxdI0V7I0tgqWxla1ts6sW1tnNK4+a2hwppvMwPfnWkDTFlhszWjvs6Jr1ICuER26RrRoG1HBNlSMpsFvYRzMh3Y4D7prhai7cQq68SIYxkththtgsjWhgTajwWoCrFYbDMZGaOsMqK7RQFVZjXJV1XJnVJU4fUaF0rJynC5Toay8AqqKalRUqleqUqNKrYFGdxZ6YwMazRb8D5qASagntG61AAAAAElFTkSuQmCC',
      },
      price: 1299,
      slug: {
        _type: 'slug',
        current: 'macbook-pro-13',
      },
      title: 'Macbook Pro 13"',
    },
    {
      _createdAt: '2022-09-15T15:35:06Z',
      _id: 'faf394f0-96cd-4147-a261-b61f9f5c3865',
      _rev: 'DuZy6QJIF6wBlmkMhLYoa3',
      _type: 'product',
      _updatedAt: '2022-09-22T13:02:37Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-f397a2ae9880f755a9f7379b40708570ad00cdf7-490x500-webp',
        lqip: 'data:image/png;base64,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',
      },
      price: 1299,
      slug: {
        _type: 'slug',
        current: 'imac-24',
      },
      title: 'iMac 24"',
    },
    {
      _createdAt: '2022-09-15T15:35:48Z',
      _id: '3cc77884-da3b-4859-8212-038c5e5dd467',
      _rev: 'pgQli4bAGTpkL1eywNw61n',
      _type: 'product',
      _updatedAt: '2022-09-22T13:02:51Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-44d9259d208bb13d6b43e60c71f45380bb47287e-400x500-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAPoAAAD6AG1e1JrAAADNklEQVQ4je3Uv2/kRBQH8O8lpkBCokAICY6T+C/QUUN+VNAiGgoqKqgQXIUQnA6kKwghkNPB3Sb7y157Zjyzu/Gvtcf22rv22ptwHRKiIYoQoqBAELJZZEd30vVINHnSR+/pvWns+QFcxmVcxv8Rmqbh8y9u1tkgBJSyGqG0zoyZYKYJythjswsMBmXQDIKmIdAzCMDUJvqkBbM/gC3H+P7Ot2g2m9jf34OmqSiLAqenf+Of01PkeQ61q9bzyu43O7A9H1wMEEUSqqYCna2P4HoBPrt1G4fJAUzGVgihq7quK9w0lTzPlZOTE+X4+FhJ01RhjCnEIAqldNU02ZU/fv0FNz78AEPLwdCTQFvVQJhZfa6iE3JVJ+S6QegaoWyDMLap9vTNvWZrs7HX3FS13gZh5jqhbF0n9NWeQV7uGeR5nbBVwji6mg7sNvYxTZMroj94iXHxPuOCmaIfisEwMkU/brY7463tnbjS6nRj3h9EvD8IGReSmtygJn+Xi/6LZVlgv60CgQwxGA6fshz3Tdv1Escb/eWO/MUokAvXDxbUFIt7jb3Fvcb+whT9hecHC8+XZ47nn9mu96fluCPLdt8YWvaTgZRAlKTVTr3g+cHNZJr9Ns2L5TQvzrNZuayk03wZjdNllKTLSZbXvWx2sWaaz5bJJDseBeENaopnPT8A8mIOVdOv+TK6XcyPfp8fPTgv5kdnxfxoUcwPF1UuDy9c9B71z+Y/PDgvD49OgjD+uKvpz/kyAmblvPqZz/gyeicvSprNynCS5XIyzcN0mkXJpDKNk0kWp9Ns/NAky6O8KCs9X4ZvtTrq06MgBLJZiZ5BnxgF4bVxOnklipPXZBivyTBeD8JoPZDhhi/DjUCGm0EYPSLDeCMeJ2vjZHLdHQVXWx1VcUY+sHv3Pj759BYGfQFCyApjbJULoQghFM6FYppmffYqnPPHVDNK6YrgHF9+tQ1ZbQofutja3kHiUew1Gmi32/U17PV6taquboeqqo96D3W7XTQa9/He26/jzt3vEMVj4MeffgbjArbj1izbhm07tao+sCwMDw5qVW1Z1kWu1jkOHNfFgW2j1VHxtWb996/NvwFMfM6zHrAmAAAAAElFTkSuQmCC',
      },
      price: 699,
      slug: {
        _type: 'slug',
        current: 'mac-mini',
      },
      title: 'Mac mini',
    },
    {
      _createdAt: '2022-09-15T15:36:27Z',
      _id: '38b6b903-5463-4e95-8aad-76a905c5bce8',
      _rev: 'DuZy6QJIF6wBlmkMhLYsFX',
      _type: 'product',
      _updatedAt: '2022-09-22T13:03:07Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-842b1105ccf1dd945f0cbc1b3cc6547001c8d562-400x500-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEJklEQVQ4je2U20scVxzHf9nHBJpCVkgfREzzB6QQfNBaEaqBNg+lf4YvBslD6voimKZC412zGlIvCUETL9iqNa3Ozm1n3d25nctcdmZn1pW6Ke1DMZXSNDpTZrD0H+hDH/KDD79zfpcvv3MOHIC39tb+B0YpBUmSYl+pVKBarcbe8zxwXRdKpRJYlgWGYcREdRGEkHhvWRZgjCGfz8d9UMA6ZDgOVITA9Xzw96vgehUouR7YThlM2wFq2oANExA1AREDdExjMDWBGBbIqgYsL8T1UEAIdtkMKLoOTix4EAs6ZT8WtUouGJYdN+IzwX+IYsQ8E+TOBDWCgReEBML4guf7lyrVatLzK0m37NU5brnOLjl1hmUlqWEmCTWSmETQJMI0SQwzaZjWJU1HF8SslHDLHoCCMHCC8K6G8A3X82/7+9U+1/NTJddL2Y6bMu1SippWihhmClMjhQjtRZj26pj0RntqWrcVVb/BC+LF6ESgIAKcIDZoCH/ler7jVfZfOmXv0Hbcmmk7NWrZNWKYNUSNmo5pTcekpqEIfIiI8ZIYpiOr2pccL9THghqmIIjZqxrC007ZP3a9Smg7bmjapZCaVoipEeqYhhoioarjUNVRqGh6KKt6qGMSYmr+LqvaFMeLjU65AvHLCVkpEkyXXO9VyfVCwyqdEsMKEDECDZFA0VAgq3pQVLSgqKhBQVaDfFE5VTQUImIcyao+yQnZxnLlAAAbdjyhquNp23FfRZPphJ6qOg5kVQsKshKTL8rBXiGiGOTyhUDaK5wWFTWa/iiakBeyVyrVnwCIaUd3eFXR9Blq2sfRsaIGUcqFDMuHuxk25IRsKEp7YRQTshFSyItSkMsXoys4LshqmhPE9/cPDgHKfhUyLN+QLyr3ZFXbZ3nh9db2izffbW6drKytnyyvrp18u7F5srX9Imbz++2Tja2YNz/uZl5Le4X9XL5wj+WFhl9/OwIIwxAyLHcxm9vrYFju7vOVtdX5x092ZucXdh/NzjOPZueY2bkFZm7+MTM7v8B8MxfF5qPcztPFpdXtH3buClmpg+X4dyItuPnZ58Dz/LkMy51ferZcP5WeuT48OtY2PDrWPjI23h75oZHR9vvDI/8yNNz+9f3htrGJyetPni7W7zDseV4Qz7V+1Aawm2Fhl2FAzErwx59/wZXGRuju7k709vYmbt26lejq6kr09PQk7tz5ItHX15cYGBhIDA4OJvr7+xM3P/0Eaj//ArwoxTpSvgDA8QIwTAak3F6cjMZ+7/JlaGpqgpbmZmhuboaWlg+htbUV2traoKPjY+js7IQPrl2La12/AqKUAybDQV5WAdIzD2FlfQOWnq/A5IM0jE9MwOTUFKSnZ2I/MjoGQ8MjMdF6cuoBpKen49zY+ETcs/hsGdY3tiA9/fC//2D/Bt6PPaHYp18AAAAAAElFTkSuQmCC',
      },
      price: 1999,
      slug: {
        _type: 'slug',
        current: 'mac-studio',
      },
      title: 'Mac Studio',
    },
    {
      _createdAt: '2022-09-15T15:37:07Z',
      _id: '0e9d753f-1d41-4cfc-bd19-1ec94239e3ba',
      _rev: 'pgQli4bAGTpkL1eywNwA3r',
      _type: 'product',
      _updatedAt: '2022-09-22T13:03:21Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: {
        _ref: 'image-b121778d6f9fe6d635c14d34ce64c214b1ecec86-400x500-webp',
        lqip: 'data:image/png;base64,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',
      },
      price: 1599,
      slug: {
        _type: 'slug',
        current: 'studio-display',
      },
      title: 'Studio Display',
    },
    {
      _createdAt: '2022-09-15T15:37:54Z',
      _id: '061f3a87-45cd-43ee-86a8-ece168a70722',
      _rev: '7QRoBHgb4U1Nb3n6kZFX9K',
      _type: 'product',
      _updatedAt: '2022-09-22T14:48:49Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: {
        _ref: 'image-646e7d9d1a339c9807a0633cf405efdc952bce20-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAER0lEQVQ4jV3US2wbZRAH8M9QIWhKk91s1k5J7Nh5ef2KH3n4sV7bcdaJX2t7107s1HayTdJQ16T0kSziIahIBUKqqnJAtBIIREFVzyDOCA70hDggISEhDt5LDxygF1A6g9JKdcRIf83tJ41mNIQQQk63VsnapTrZuKK+IK/LZUVVvt+4vPHXm9dff3jjs+t/37738cPb9249+PDzm3e0fS3qDvlpbyJ4Ykbkn83HRaLFGiSyIJCnpWwqpLqzTJoXGycThfl2UAz/tiCnHjXazYPWG+2DjSvbB9VzjX8yK9Kv3KznE8ZjfWeQd5y1xNyusYDjmF3wElvQ1QUL6wVSPieTWrtGRTLRPWfQ03GFvBhJx4DPJ9EW9iHjnkDKbv33xPjQnye91gcMb//RxHPqKc/oi8Mhjgz6x7tgSZUN1fMrpNaqUcnSwt70/FwnMD+D0Xz8kS8Vht6pcXjGYYFjzhF8zmnBHp8N++bG9f7p0V2GG6ZYn40wLksXXN5aNqy2Vkn15Roln1E0qSHpJbWIle0KRMoi9Cem8Pm0D3pyATge4R71+EfxZGC0Q3utGjMxRA24LIThzIanYGWzYqhsVkh5s0yvbK9otVZNX7vQxOaFJkQbGTA2Ysi8VcKh/Qqw9Qj0xTikguN6v39UY+1mmnWNkAGnpQsqZxSDrMpEVhW6vFnWls8u66utGla2lyG0mQPrfg0dX2sY+GYPJq6WwFSeRibh0JnZcY3lnoCse6QLyqpsKK0fgjItq7KmbMi6sqFgppGDmfMSeO7sYPinD1C4fw28t1UwbwnIpj06G57UjM4RmnVZiXHK1gVLayVDaa142OniWlErrhf04loBU7UlmG1LEPiijcEfriJ//xpMf9kC604STZJPN0Y5zeS20Ua3jZh8Y12wUJcMhbp02Gmpntfyp3N6vp7FpdoSzKmLwL1bQcfdNs5+9zYE7p4H20URTUW/bhQcj0HWYyPGo2C2mjFkqxmSq2bpTDWtpVcW9czKIqYqIvhKPAypcbRcP43eb18D/1fnwHpRRGPRr7MCp7HOEXrAbSWs98jIKUU0LJZFslhOUSllQRPlpC4qSUwUYuAUZ2Ag60f2UgYnP90Gx0dNMLeTyBb9OiPYNcYxTPW7LKR/6shSElLcMC/FybwUpxJSbC+ej3XikoB8JgJ2wQtU1Im95Tk8tZsF89USDF4QkanMdui4Y4/ihinKaSaUd6R72EI2SmJPQgkZfjea5jvRDI/hxRBM8h6gQ3bsFd04uJ2A0ZsNMN+oI/tKqkPn/Lt9LgvVewjOjv0PzAmH6Y1m+B1+Kfx7ZCmEQXEOOGEK2CiHtOjE4a0YuG6dAefdHTS/X/vD2BReZaZsvX0OMxmIH3kOiXyCLBQXSLKQPC5ko/VIOvxzeCkEwdQcuBM+OHUIRifQlPfCxOU0uG+u48R79V8sWyl1yDPWw469RMxi4DH2H/j1iPzZ3+eoAAAAAElFTkSuQmCC',
      },
      price: 999,
      slug: {
        _type: 'slug',
        current: 'iphone-13-pro',
      },
      title: 'iPhone 13 Pro',
    },
    {
      _createdAt: '2022-09-15T15:38:42Z',
      _id: '2ed3ef2e-6442-43f6-81cc-d28fa0ec1a79',
      _rev: 'JZHoOarFe2lt6noMbiorPx',
      _type: 'product',
      _updatedAt: '2022-09-22T14:49:03Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: {
        _ref: 'image-d0d1c15e7b7d7ea8b75443eefa6a488ef513651b-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4ElEQVQ4jU3Tb2gTZxwH8J/iwA1nUftvrsykSdqkuUsbk0vuLne5y13uLpfLn2uTdjFtU2u1rpZOVHSWrhv0j4U5sS9EUCcMbJkWRvNmLxQRNhjs3fZmmzDYi+GLbXQMxGjzwucZ7fSS59X31Yfv83t+DwAAjH14AlJHNEgXdegdTu8wiondekHdlygoTXpRbTKGks3GkNFolLJ7smfGd3oBYOHP6xCM++H1abW1WBnUAQkYiQUfRYFsxvayKqsIhjCdGTQuZUrJS/EBaUnKC/NSTijJJm+nI4FdHaRvh27q0NDUCG22Nmh8d38NVAZiEOEl6HILoOTk9ojGXeZU/vdkPrGRLmb+1vqzG0Ja+ysoM9956e7znQGP6g50dnb6O3b7JC8QvBecXkcN1IsK5HLDcDQ/C0ZRJ7S8ekc0Ys95lcdJM49HRudwbmgO+1Njz2xq9rErHn1IRHumvZTb9viPcRi/dhLaPfYamB7WoTsWATsrgzGYIPWCtiKZsWd0nMZm78jLxYsP0KeLvyJ99v5L57ll7Bgbe+7LSmvdvG97iBhjcHjrQL0QB3Ds3c5STiAFk1/hMpEKazD4SOE4ujX/A7596wUq3XiCXFe+wQcvzFY7hnJlUqao14bTV3dlyeThre7W7cynWZJN0atMiq4wBo378u+jazNldPfmv2ji5hPkvLyOD5y9uPleoXfdJVLUG6+MdqKuodIfA2jetZ0Fk7NALsNhJauhiaPn8dW5R3hy+Sfk/uQGfufYSLXdEMtOxmc1tHkO1cDUsG5lOS+SbIpZZQy6IudlrOZVxGtRbPafxObUVeQdncQOI1rtEnvK7rDHAh31DdOlZB0YIyMpZjWshyt8hsdcmkMegcB2mcKeQRN5BkTsFj1VL+sue5kuC3TVz3Drla155kSSNZjVcCJUodQg9skBZNfD+EBJwwfnC4j6LIUjY6HqYYUsd9G1hs76hqnhhJVjfcIWuBLSQpVAPIA9CoVai0m8Z2Yct3z1EZK/P42H7hWqmXNimdLIuob1a1NUrCz2RgkmSddALYyajuXQm4tn0f67s4j9cRqf+OXU5gdf95fTZzgLJFhnDYznRdjZ3PBqbSIErYfvUCpVCcgBTMSDqK2UwW/PncYNX84g4tsLOPfzqc2RR4X1zJIQtECpDoymI9AeckMzaQM2SbtDWugLSqWeboE+sRs5UhHUOFlADVemkGNtCkfvj77Q7plr/MeM9VNcnK0G8gYDfvkw9Eh+YBLhQyGV+pxSqY2tK5McgRzhTtSihdC+CRO1LRWxb7nvaWhBue0/HvT8hv+BBbwOdv//e/gfaG1lPnF1F5QAAAAASUVORK5CYII=',
      },
      price: 699,
      slug: {
        _type: 'slug',
        current: 'iphone-13',
      },
      title: 'iPhone 13',
    },
    {
      _createdAt: '2022-09-15T15:39:29Z',
      _id: '356a5c49-638d-4dca-8ab1-028cb522528d',
      _rev: 'JZHoOarFe2lt6noMbiosK3',
      _type: 'product',
      _updatedAt: '2022-09-22T14:49:15Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: {
        _ref: 'image-17a37299e66e80daa810ee3532a325e67d8a1e67-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEL0lEQVQ4jX3SW0wcVRgH8G8SLsttQZYdWJZd9j47szszOzu7O3srpWJFiE3QCggUurBAoVCKsiAJhVJADZdit4niBULAUl9MGqtpNA1aaQtYfTB96oPloa0pZU18atOXmWMWbbg8+E++nIeT/E7++Q7Af3G4/cDwARACxWCmHKCz2AHX4vB/URVmgkKVAIq8ROjr79+5GL94EXghCJ7AQfAGizE755FTjMtA0k670WKl1QUaWpWv3h48N9eO5+IGtUYtpxgbRlIEmAjT3pcQQuBwB4ATDoDbd1BGMq4Si42bMlPsklqjW8qQZ11OS8uIz1JqavpSRkbm+dw81SskZUsxWwgwmEzQ0la/F2VcAWDcAXB6i14iaFePgWTvm6zc80It91QhJ56lJ6mfpSWqnspTdM9zFfSGUefudbC+bIYOAmn1wLs9uyqPTU6CzenDbE4f8P7iHILxDBcSTMxMCkhw1CPe1I4Ks44gVVoJsuYfQ0Hmnb9KfCdHigMVyvJDISgSqrFj9S074FT0AhCsByMYNwhFJUorK5zTWpgtGx1EdeUDYnP5glREvi9xhX3iG/5PUHflpa2u6vGRo6/V4p1VnVBT1oaFmnaBH8/MAOkQMNIhgCf4spL8F4xxXBANNJ4VZ3uvST1VV6SmssvixIlraOnMlVi0e2o0XHkc760NQfubYWxm5tMdcH5uDuy8H6N5f3wx8cpnNWZ6i+cD6HzPsPjb/LL0w4VV9PUHN8XVz2+hX+auxhbHpkc7Qi34qdp6OFUTwlZWVnbAvzc3we70YXbeB6w7kGOh3UMFJvsW5/Kj6cFh8Y/ry9LDn1bRxvWb4sMbt9DvV7+NLUx/NNrR3Iq31jVAR0MIW19f3wEnJibAxnkxm9MLjMuvMNv5IbWResLyAhofioj3flyUNm/Po8crn4mPbi+iO9/NxeamR0fbmxvxcF0dtB2vwdbW1vZ+G8ohYBQnAM37FCYbN5ivp56wHIfG+6rEe1+1So++eAs9iL4uPviyAd251BGb/bB55ESoEm9uqID2+lLs5xu7KsdDsh6MdHjAznsVRsoxqIqDDIUmm3jxbj8trdcWSMtHcPHuSRP6ddgdm48cOBeuPoR3hQPQXc1js7MLe0HrC9DpVRhJxxmVntpkrWY0dlgjfnM4SxonZdJ7umRxQUhH31fgsdmjhuFwKascqiQgUmrBTp/u2Q+6MZL1gM3pVRis7DZIGoyokVSK3XqZVJadgILyBLFBlYSGyPRYv1M1/LaHyon49RByGrBIJLIPZDzboN3pzdYTbH++nvpTqzUiOk8pkRlJklqWIOUlJ4qG1ETkzE59HNDgAwGbVfGq1QA+ix6LRqP7lhLHHAIwvE9usLKdBQbqfp7WhLIVuJQik0my5OQXJ0pPS9vAlcougrBkmoxG0Ot00NfXtw39A/cgaK9Qe1P2AAAAAElFTkSuQmCC',
      },
      price: 429,
      slug: {
        _type: 'slug',
        current: 'iphone-se',
      },
      title: 'iPhone SE',
    },
    {
      _createdAt: '2022-09-15T15:45:06Z',
      _id: '5d8be14b-4a60-4649-aeed-0fb2490d3961',
      _rev: '7QRoBHgb4U1Nb3n6kZFejU',
      _type: 'product',
      _updatedAt: '2022-09-22T14:49:24Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: {
        _ref: 'image-4f8ccbf995ef145cd2035d6cc78eb9e82ad28a51-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAERklEQVQ4jVXSWVCTVxQA4FNtO7UzfWjHh85oCwNkqmgISSAIREAWF4owaKGIFMRKEQoUECm0ZSsUENkKFkwKEgjhT/78yU8gCWtBpyrqA7UCAgqUZcAuo3WhCTz0nk5ibeiZuXPvy/nuuedcAADopGZAr54HlroPXaq5TXr1/Bu97PK2y71/2F/74bH99aGn9tcGn71zc2jtzSdLuPn1rZYsgLPxNNhx3gLYArB9+7vwX+iZebhYNwTJp8uhk7q3tVV6M6K96VZVn25ROjL8RHJ18E/JkPG3+h524bRMepUjFge96rt3/6bPz1RCoP/7IBJ5w+ZXbB4YNYvg5x9sPbPUlPN3Nf3Sukr9rzrVxOqQfuUpIx9/Jq0belxWSN1IjC/Kjz6SFZ74URk3Ma50yxUFQkmmEcJDT/4ftAQiAktNC+ore5jqcnadkY+iunUMa4r7MPvTZkyMqfgr4Vj5QmaCdCQ76VJewvESO0sOTiLs8w2zgQZmwYpZVpdqViiT3NDIJNfNbMddbKm/9fe57EFSlGQkOfFaknOyEwuSjabcT6j2uA8KuC/y9ogCbWC3+heIDE0GWnbbUq27QbOo69OtrPdol7Dp/AipThrACx9fJtWxgyQ/wogZ4awpMbRJFXEgx/XFy7z2HLCBOuWMdf/qbCMYNIvu/boHumHjo/Ve7TJeLBwmpUdU2BCmJcoYA2n6sBuzAxXmaK8aJkScJXBFAASEoIBIG6hRTFlvORGXBl30nNCoWdIOdP++ZtQsYFWugaT4NmCJXzPqYhlyJVmPTZH0WpJPreaQR6aw9F/wYFC0DaTbxq2g514fy18UdNPzTJ/ugdmgncOyXJYc96zGDNEFbDt6ifyYTKMxQWMuCm6gQ0Wf8cECvoTgIz5sA5WyMSsoELmBRjEt0CnnmB7tsrlTeR8LzjAkzL0CY3ZX4Te+dUQbJcOuWLWpNLhRGeae8ryHNQgit4CN4B0ryHO1B6Z9it9Jzar16iUzI5/GL1LV5CC/FIM5pZgqrCEN+1uxMZgypXlXK/dxT/GsFb6NIBT4bgBbnoN2di8DI5/kaxUzdJdq3kzLJrE4lSUx7rUYtaMWUwQSku8pxxQ3ienQzjyKz4nmWTpYDAh8ntgGUi23rSC8ZunnXb6m/R7dSc2ZVS0TWJGhJ1l+bSSd30ZS+a0kZrcE/R3Pmfj2WR1cp2MuFtBSpgvXwwZ2tIwCPkSAbdYB8Rn5NM12zJo7msexKJMlJwIkGCWQYohzI/FyqEW+3XkTzyGvg/denEs/IIQAApcr3FCh7CcYMSLgMlpArrptUq5VzKwqmu5gdjpFAsRFxM25kAg55UTgUI1uDrWrIs7Xre67EnbFAYI/IAiFXhuHMgoa+SKw7Sugah1zVMkmvqXbph62f/8z5mQoiNgjnexwPEW4TmlE4JSLHpyCR947v6zzFaQ48GAOuDAAQf5Hrdg/epVY/FxnXygAAAAASUVORK5CYII=',
      },
      price: 599,
      slug: {
        _type: 'slug',
        current: 'iphone-12',
      },
      title: 'iPhone 12',
    },
    {
      _createdAt: '2022-09-15T15:45:47Z',
      _id: 'b29b6711-c2c5-4ca4-aa1a-f5e47297088d',
      _rev: '7QRoBHgb4U1Nb3n6kZFib0',
      _type: 'product',
      _updatedAt: '2022-09-22T14:49:40Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: {
        _ref: 'image-ad6982aa2321c2528172c6360ed9230dd0b8d45e-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEO0lEQVQ4jVXT60+adxQH8N+bNUtDyLL3y5L9C8v2ZlnXZFnTqmg1OufqrsXaTmy8gaDFAlXwVm/V2qpU085tVmtna9Q5FcELVuoFUXiKPAKKAiIXRVG8nLOIW2UnOW8/+Z6ccwghhFhoA0FEsru1QWjj/Hv04sLHa8umCCOli2lpfRJ9I5sbnZCUxLp8OZoVlxDPSk65FpGSlfPJTb7g/TqZkNz/KYaIiyTkba2t0CEQEd+Zfq3+bGigr25aM66YntGoqlrbVT9La1Vx6QJVxPepyphrmcorwjLFj4U1D9kF0vP5vMwziVFfEp5IfAo61sz/gWcnJ0a+e97ZrlUM9B6NTYwdVjzrO+I9VR3x/xg+5LX0HPJbBw9z20eOOE1d+lRZDZvLzWSwoi6QHNGdcHDpX/CAMTM1we7teUmNKgdx/NU43Hs5jCVKE9ZrPdgwu4ENWi9Uqm0oeDpMp5c/SMvhZjEjWRcJVxwGrjusIXDH72LYrCY2vWigVixGnNFOQ0OPEqrHzCBf8EPzwhY067ehTuNASecIzatqTBMIuMz4uEiSXyQ9BTfWV4jXvUqcdgvD73WygwEfFdzxoN6ggyd/qaBxYgmbdR6Ua93wSOeFpterWPFihBbXNXGEt/jM5MQYIi4uDgOdVrJut5A1m4mxvelkHwa3qINdH1KUDjoGlNAxRWOnwYVtOid06F3QMbuMTT0quvh+I0eQx2UmxEcTiSwsocthJS67hdhtJobf52Af7Pqo/YAnBD4fHIbe2UUcXnTikNEOCtM69C8s4+M+FV1a38Dh83OYsbGRRCwrCksYAq3EsUIz/N5j0EsFj0H9LPR2d4K6vwvnVS9QO9IF2ol+eDUygJ0dbXRNTSVHkMdjJiR9Q4qkkv+DG3YLcdpOwP1dL7UX8KBxXgOjj4rALItHT+F5dMm+AFf5JVguS0SVLJWWS7I5ApGIGZspIiWSW6eg22EhG45j8GTk/V3PW1DdKAJb3ue4ffND3Ez/APwZH4GT9ymOF3xNy8UZnFxxITMit5IUh4OhhA4LcYQn3HHjG/0MDHW0wFxjIZrLc9BcmA3W0jww1Eux72E5XVsu5XDz+MyLP6SQwju3w5bitIYWY19dYmz5HOxgwBMCqYUZ6G5/Dgp5D87WKnGhcgz0NWpQ1yuw7d5vdLmsLI3Hz2JGJ0cRsaggbGTXCnGvr5zcoc95NRjwGI5B/dwU/NnwDIbLFPimlkLzgyUw19OgKZvE1vxfTdLsol+y+RnMC99+RYT8/FPQ47IR9/ry8emc9W86k4MBz9zejhsM2mlor/oduoVdqC4Zw8kKNWjuTsCg5G+UZzQaxNdF7GxeBuMc6xwR5uSFvZ7dQpbNFLFZjGc23WusgN81urfjPjQZdPi4Ug5lqaVQfaMaazm1cNwV1+8eia7e1uSmcOOFIsG7UVcukYLck4T/APOJ+2NYorXdAAAAAElFTkSuQmCC',
      },
      price: 499,
      slug: {
        _type: 'slug',
        current: 'iphone-11',
      },
      title: 'iPhone 11',
    },
    {
      _createdAt: '2022-09-15T15:46:44Z',
      _id: 'e6c0c625-dbdc-4aef-a288-ef8c19d01a17',
      _rev: 'JZHoOarFe2lt6noMbiowfv',
      _type: 'product',
      _updatedAt: '2022-09-22T14:50:14Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: {
        _ref: 'image-7fa91437667669305fd7f96be7da64d01b6da4d5-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEmElEQVQ4jUXTW2xTdRwH8F/BiCaakWU8aCASNYHFBx8w8cFEn7zwIhc1xAeNYDAY4mVRzMxA8BIQwRk2sLRshbVr13t7Ti/n9JzTy+l6oWvPOT2np+3aru3K1m3d2BhkEzMof7OVxN/LL7+XT36/5PsDAIBTJ09CPpcFdb8BBlVaGDD2w7/zIhRLs09OVOrbZqrlnQvV4q5GrdI5M1XbMVOfenp5eQmqIQIq1QoIUhpq1TKsrKyscwDe4ctAm66DXjO0MSPUBIeV7aDI2F4+Ej1dSYSVFX5MU8ykdUWRu5jnbr4vp2525GYmASEE47nMRl9ba7ZAy1894HFY4cIZDD5dOgRXL6m2qlWWD016B87aTVOSxyyn2UAwEY1OpEYDDSHkc/Ess0/kU88MqAYg7MWhMVeHhYXbLbDn+66Nvv+d9xTqK30dBt3IQYPebrPojcv4deUaru5jvDZbD0nQjiDpWU34sKUU4x0QE/E9i6v3nljfrlwqwPz8bAsc7L8AvSeOQu+vP2zBjfp3GTrgYCORxSjtarqGNQ81V5VRvU5/DMOIU4TbU4kQTpSkXDkhGj5WLJfaUuPjIKc5uHNnqQUSVi34DVfAMXy5LcEQX/O8WOVlEUkhR5MxDiGLwTTjMJvPO63YcRfuvckSGBrzYbc5ljmXyUjPEwQBEb8PGo1GC4xSdgVPjkDArWuX42x3Ljdel3ISEumRJmMYRE6zbdlpMiltRstnbhdJhkhPM0nh9/gQ/bfEcy/1n/kZzKo+mJ661QLjjFNRiOAQpUzt6VF/N59K1wWeQ1lqpBmxaJEXcy96XO7zuB3f7/XS9jBNPuD8nhWBZTQSl+w8tGM7/Hn8MExOVlpg2GtWzEkMJPyWdhazdhM4UQ8xNCqQuoeCy4wCdGA+yIZP+0hmr4/02yIB+gEfJFfT4cB1iUt1fvLiDujvOgrVSrkF+h06RSNNQdxnaPcOa7rNOmOdcjtRwTPwUHSZUJAJNtZByuc/QFEBbyzIPEqz1D0xElJKAvfyjd6L4BnW/A/iejWUwhagbOqt2NBAl81gqQVJDyr6dM0kZkQup+uWE3etx+YIwwTjCdaPxDA9L8XDv8kZ8blAwA9jkRBMT9Va4LVLv4Pjyhm41vvTUwa1cp/NaA0whOd+gjA/8ozceHRNpZaGtNoTNB36JRwKV/lIEGViwXwmGT+aL44/y2UzkJUEWFp8HOwfv/tm43UOvP2mou/iH9t1Wm2Xw27PeDFb02bQIt2gOue0WlWj4QiVisf+ySQi97PJmD2b5t6YnK1vriMEpUIOFuceB3u9GJqAz78EONHz7SarxdZJkvQ5NhTKRQP03aAHm2PceD7GhmbFsfjdHJeI59PcF4W8vA1zWIGLsVCdKMH0rccnIzQNw7gfYuwo7HnrIBTzpS2ppPCqwAtfyWleKcRHR6IMZYuHAk4hERuUhdSR8az0Qq02uekBQlAs5GGuVoGV1dUWeOTwYfjog4/BS7jg7NlzsGt3ByTHUptlOddWLBZ2lov5Vwqy+Jqc5l6XRWF3PptpmygXFGsIQVYWAfO5IJ/LbGD/AfWAB9QdcO2uAAAAAElFTkSuQmCC',
      },
      price: 399,
      slug: {
        _type: 'slug',
        current: 'apple-watch-series-7',
      },
      title: 'Apple Watch Series 7',
    },
    {
      _createdAt: '2022-09-15T15:47:40Z',
      _id: '3ab02032-4423-4453-8c27-ab7103cd2c95',
      _rev: '7QRoBHgb4U1Nb3n6kZFspH',
      _type: 'product',
      _updatedAt: '2022-09-22T14:50:28Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: {
        _ref: 'image-1c920eabe02878c27ee899a47630d89889a6a70b-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAErElEQVQ4jU3Ua0yTZxQH8GO2aZwZiNMYlyXzw27GTyYzu2kWFQkwEVp6l1J6b19a+kJvFkGwLVCohQpyEVpuWoqrERktBueyGY3zMhKnJtscahCcirOtrn3ftzeeRbrMPcnJkyd58sv5cM4fAAAMmAjufHsKooeqYLxOD63DAwAIwa/ujmWEbf/KZJNxXbLB8G68Hn+HqsYyEzXY6+jKabiz90tI6sSANCVAKVnw3+ELZXC4vh4CMj5c+uEWIIReflqF8NItizqRKGVSmKM6SetjKcMxuy+/ar4kf/szCS0TWXDoXrsaSBUXHiiFr8Atn+2Ay7Y6QIpP4cqDn+GBCcsIVZbtjuClvZRWeDNukNwIq/Z9f4+Vc+u3gu0zM0VfeR5yc3MicuabpKIYHrJ3Q6JSAKG+sjSYs2vXUlcbV60EhVi4ZsCk3Xuhpso7bVIv/GJQJmZM2OVHeFndfUa29/c928J/FGxbmGNmO0PCwg/RhdPQCABkOQ/itto0qFapIa+IDlwub7nVbN7Z1+70+Xo6n33T4VzstxxMec2mq9NOs/SplFkxz8i+PUvfkZxnZl98Jti7BxnEy5EVBwLjAHI0pUHHYQe02O1QU1uTMeodxSYD/pmz/jNocuJMasjtQr0t1ofnu+2WYE05L8jfM7XAzU0+4ebeDQkLsbimJCOm5gGhZAPVfiANulwuGBkdhbYjbVl+f0A3NemfO+Vxo9Oj/akTgy7U3XQoPN5q7nhi1dIiEronXFoQC/K/fvJcTKuNafjrItJiIORMoBr1adDtdsPFa1fBPTiQdXLEqzvR55rrsjegjjZLqutoC+ppMT8dP9ps/atRv5NSsPqiYhrxQlgYjMgYjVSlYENEWAiklA6kpep/4PR1cA8NZp30jOiGjx2bc9gsqNlhTnV1OlD/kZbHU0Od1RG7aVsM4/SSMgYRFdOCUQWriaoSboiKiiAmY0DUqn0Fen0+cLa3Z00GArpAYGLONdiL+o/3p0Y8w2i4s+3RuaGuarLZuCOOcYYpOTNGSIsXCCW7LqYTrSOVHIirePC3zZAGnU7nUtXX12f4fD514Gzg3tj4GBobP5M6PjiA+hxNs1O9rXrqEF4QxzgBSs5MEjLGfbKcq04YxJmxyjKIV5ZCqPPfsanEcRAplCASiVc0mM15nYft/oE2x4t+u22x44Ax5dqvuX7JXiNJGCTymJJ1g5QxUqSc+ROl4hUlqxUrFuvUENcKIdbSnAbzcnYv3Z9s2rRMwGaut4n5PK+0ZGJCxA59J2Ilp8tLLj7Vioyxcu4AKSsOklJ6iFSwemIVJZtRTwNcA4CEXgykxZgGz88+hx9NGkBrAbZu3gjnWLlv3+bk0e7y8kf/LC24G5YybhIYZ4qQMW5HJfR5Qlo8TinZRXFc8FZczgZSWgwJowwejdSlQc/YBNSaLTAlYC69X67hooyZGSwr3B4UFmlfSBntUSXbFVWw3FE500ooWPmUirc2aVTA9MdvQAIXQGS/6lU45HyxFfy9TghjbDhIy4X3eRwAzzWY1itfe4yXrQ5X8N+LVPA/imr4HxAa/noSL13xMrbC9M8hViWApF4ESW06GP4BlrxnMuRhgbAAAAAASUVORK5CYII=',
      },
      price: 279,
      slug: {
        _type: 'slug',
        current: 'apple-watch-se',
      },
      title: 'Apple Watch SE',
    },
    {
      _createdAt: '2022-09-15T15:48:13Z',
      _id: '6278129e-2754-4919-a457-4d16a09f461f',
      _rev: 'KpVJuUj0Yf784nHVxaM2BL',
      _type: 'product',
      _updatedAt: '2022-09-22T14:50:39Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: {
        _ref: 'image-04499f0934f9967f3c40427c60f6dd12fee379d0-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEOklEQVQ4jVWUX0xbVRzHfyQOs7Gh00QffMCY+Afj4jJnhtkUJmTKhpTd4rKKLXB7+4d2BfUBx150b+7F+NAFfSNomJPJ3JbBjDAepmDcytz69962t729//+ce1vKH1NtrmmNNHyTk5Pzy8kn3+/5nXMAAGBmZgYMw4C14hqEQiFYWlqqlIEkqTpJUnapKnoaIeNZTUNNiqw+IUnyDook4f79P4HNsRCNxiGbYWBLR44cgampKZidnauuTdMEjuV3aip6FSHDiZDxhSQpXzMMO07T2bEMnW1jGPbxyj7TNIFOZyAWi9eATU1NVWf/byiVSg2FwmprPr96MZ9ffaDr+Vgux63E4yQTj5EMSSYvJ5NpS4bOVqF3766AIIg1oNfrrc6DOF539uzZvRMTE53z8/MTy8u/C6HQSimRIO9RVOqb8MPocjgcLcWiCSORoKbS6cxhTUWPFItrwHNCDTg4OAgWiwVwHK+32+1tOI5f8nq8istJlIcDw+Xx8fH7oXuhCxSZvBqNxIuRSMxMJKhwhs46VAU1KIoGgiDVgDiOg9vjAb/PtxvDrM5jHe3xtpbXzQMvPl8+uH+/OTIyItxeuP0dTWevUGRKIxNJM5WiI2yO79c0fZdhFECSlBqQIAhw+XwQGA40vm/t9Xe+05HuPtFqdrcfLLce3G96XW79p2vXvk2nM18yDEuxLG/yvPhQEpU+WVZ3Gnp+O9DtdkOviwBP4Exj/2mb/zRmSdmIHtNOHCv3dLxhDnuH5B9nrl7IZhgil+N+4znRlCQlrsgqLghSg6oiEEW5BnS5XNAx8CEMDnkbnbY+n+vUydSQs9N02A6Vu956zfzI5+dv3Lx5jmO5kxSZ/CWVTFccUqqiuUVR3oM0fbvDSlO6HH2Au4k9tt5TQwM9XSk/dtS0Hn653LKv2fQP+fi5ubkxNse9F4slZkmSKnMsH1NVNCDLaoOm6VBpzJbsdjv0ORyAO/HdGIY5uzvfjZ9ofdM88NIL5Veam02/35+7devWKMtylnQq83M2m/tbEKQ/VEXrQUivrzSl4nJLDoejOgiCqO/t7W3HMOwKhlnR8eMnyhiGlc+fPx9aXFwkBF50siy/wvPipiyrV5GmH1pf36yrXO4KdFvkisbGztV9YLM9+enoqCUYDF6enJzUpn+48s/Cwu1FikyekUQlKImKqigajzTj87yx+gxCRjVuoVCsAfv7+2FycrL67Cw9XXDnzq+N4XD0eCJBXUom00wmwzzgOGFGFOUVWVYFTdOnDT3/dqFQfHRj4y/I51dB1/PbzzAwHIDr12/AJx+P/vc5cMJjNJ09mk5lPqPp7ESO4b7neXFalpSvVBV16Xp+r44MEHipGndjvVQDejweCAaDEInEIBi8CFYrVq0vLS3viIRjTyXi1L5Ukj7MZNkWQZCeU1W0CyEdpqevVWHra5tbkf8F9/7FSfevdxwAAAAASUVORK5CYII=',
      },
      price: 199,
      slug: {
        _type: 'slug',
        current: 'apple-watch-series-3',
      },
      title: 'Apple Watch Series 3',
    },
    {
      _createdAt: '2022-09-15T15:48:47Z',
      _id: '1b55aad1-2f49-4810-ba6a-a507005848b5',
      _rev: '7QRoBHgb4U1Nb3n6kZFwgn',
      _type: 'product',
      _updatedAt: '2022-09-22T14:50:49Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: {
        _ref: 'image-aadb16d84ec4ac4d204ef38eb01935b67b814420-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEp0lEQVQ4jU3Te0xTdxQH8FMMc3HJRB4OzAAfte9yX20v7YXS0tLbdwVKn1Dk1QcvARFFA+giDASMYh1ImTqJuumm02nUZGp0OrMl0yxmm9FlM1kg2RY33UzcDPW3YKfb+ed8/zmfP87JAQAAt8cP2yKNEAv7YairE4RGB7wbuwH3blx65faXl9I/u3op9/gHx3g7R0ZEGzs7c0MN9Ytq6tdCf98ElNlNkJWWAmqGgYZAwzwHcKsoCQ775LC/JQAACFCVAc4Nb07/ZHLA9P6Bsb7xPWPR/t6eqbbm8LTX497FlrBOLcNkOp0mjlabDFp1AeyZnISXNZMCsM7vgrvjAwAnEbQHG1P2bAg5x3qbT2/dsv6n9ubW203V/otrXda7Zlb3q5JWXaAJyqVVKV5fBADi5Tng87ph5bLlCbBDgz3vVfk8zpBFlb63wlIWDVSc2F5T9TDkqX7qMJZ9ukaj3uTUkMe1KuIxiROPCAk2rSQIpdVmSS6pNANNUbCuaV0CnLIKYMKWDsPm1QtP2YWGcxbi5CE989uAtjzeYWia8xmD10w6a9AmF3ZrZfx7OCZGYoHkLimWtqlVdNqKzNeAm5MNwfp/d3g+wIf7navhTI1w8VXvypazptwfRshVqA0zxbtM/ajR3T/jtFcNWmWSsI7kXicwARLyRb9LeIJdCkKam5EEsHhhMtgs5gR4rUPAQVNSuLUlL/VyZPmmmD1zpoXMRoH80njEO4FqAjsfOcy+CRslCRhlvLM0KZoTiySPxTzBfkIsEL64RaFKmQjX+4UcdBGDb3bjqRe6c7tHPBmz1Uw2Kjd44v7QQeQKRR+wtsCQXZ5nX6MSH1cr857iGPFEKhAdwYW8vBcgLaMS4cpuHgfdFMPNmCT1/GD25pFw2qxLn4nUBsscG4kie+s7Pxtc4Z5yJcm6i7BjejX1VC6TP8FF0iOEiI+9BCkyES7EVnD++oILlw/yU89PZnaPb18yW1X7BqK8+rhiwyhiu6KzrDeyxV8os1SVUKdNuvw5Ja16TEnxA5REIOQBQDIAMPmKBHh0Mhs+/ygHDo+vSvn4aEb7e0fT7q/ftxJpdpfHyV3DqHDj4I/asurOoD7fE3QwVxwWLVIXFD2gcWpUjolyuCkAuUszoESnTYCDQzkwOZAF23q5r0ZjWfbR6ZyLbQfxJ8Z9Zc/wvqZnmK/662K9ubnHZ+xoC1i/dTntSKfRf68iZS0yQpSyLC0ZpPzV4K/0JMDaMA9WuIchUMnnhDoFb4Za8fbqRuVta31JXOEwIImc/s6iZqJ9Yc+JjkjlQ3dFxd/6ouKzSoospuRY8oJFHFCQxH+vN/+/Hpv6eeIsNSbVmYyiFic7WOsy3bGZ2T8LaOUvbKHyTp2vdKYm4P3DYbV9pWGYVprCs+Zn1AQGRYUF/+MQgIu7Aw502aCCsxGmWusWjkS8eE/E2xap9ccqSkuPmfS6U2ZWd8ZsZA/ptJoIQyu4Slq2YH4ez5OC12GF6PjeBGgwqUEPNLzdsB7qgmZI+7AFpke3Ltg/tHnJ2I6+VW9t68WbIo35Lmc5Y7OYJEaDPlWnL04CDoC6UAEIIZCR+HPsH3DIlEpEIPAAAAAAAElFTkSuQmCC',
      },
      price: 399,
      slug: {
        _type: 'slug',
        current: 'apple-watch-nike',
      },
      title: 'Apple Watch Nike',
    },
    {
      _createdAt: '2022-09-15T15:49:27Z',
      _id: 'ab334b36-4c6a-4be5-8bb4-8fb4cbeee437',
      _rev: 'KpVJuUj0Yf784nHVxaM3kR',
      _type: 'product',
      _updatedAt: '2022-09-22T14:50:58Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: {
        _ref: 'image-caac8b4078aced19c20b07ad3db9f9d349126c85-640x497-webp',
        lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEwElEQVQ4jT3Ua0yTZxQH8L/T4Yy6hAW3mW0KrqVAhVLR0pstLb29vfdtofZCsQwoUsCVUgXEAuU2tyxCxcucIqKi2SZRRIVkUQmJVqKgbmJgicuyBT8ws+lwbovwLpTED09yvjy/nOSc/wEAVFdXwykzwuN0o62lFXMUhaZg/RIv6YrxaGxv58vJOJM4+30pj7MmI529cmUce4nDtR7tFivwYSpkKiEKiJwFCmAymaAoCieaw+DT0vF8egZqhnBZnsiwIV9szM0TGXY7s4h6DyFs9ps2N/uMGduLtFsYRhU35j3lapRrN8Gil4L69sdFkEaj4dmzPxDILwOUwM0bI0uDO6po5Wb3bo/GHtmuyHnsUmhu1Fi2Dn7pypxqsXPHdhqFIYdCnu5QWmOAPFikBPzWwkUwKSkJPB4vWscnxC81GYy0Artrl8e2fcxjzX9VmJM3W7TN8U3QqWpqtQpG95qE/5WrsybcCqXPrtCvIQUkihU66BXEIpiamoqEhIRFMD7+nczMTI9Bp7/jcjj/cdrslNNu/7uqsvJCW8BXsMcoORQyi57WWySzFXppl1UmYS78o44UQyHIwvDwMMBmsyGRSBAbG4u0tDSaVqs9GAgE/gyHw1RjqHGuzOul2ppDE6cPhQOnKkn/d5Xyh6cqZK8a7ZJhh0ys4aTIYwAW9Lxs3L17F+ByudGhLDyTycRsaGg42dfXNxuJRKgrV67MdR4IU4fDHb+ePXooeKHB5e6vUd8841NRIYds0q2UFxECzaq16ySwyjSLHYpEW1+DVVX+jb29vadu3br54sH9+9To7dtzly71U2fPnJ4819NdGt6Zr9//iWboCzcxV2dX/1LpMFcGykpjST2JMuc2jIyMAHw+/zXo8/mi4Ojo7RePJh5S98bH5gcHB6m+vvM/DAwMODuqPJkdxdqTB0vULztK9b+37ypo+7pj3wd2aSqKNRyMj48D6enpr0GNRsMMBoM9/Rcvzt4bG6OuX7s2f/z4Maq7+8SDy1ev2q6Gq1IuB43tA3W65+dqyedH60s6jx8Of7wwmHUAJiYmgOSUZMjlCsTFvYvk5CS6SqU67Pf7nx0Ih6lQY+O81+udb25uutPb20veaC9Ju95k+GqoXvvXuRrjb521hXWd4Y61UfBNYGpqCmAw6Niw4WMsX7EC8fHr41gsljdbKr1HGoz/agk1pVVrXhYVFV3Y19okGgpZsoeC6sH+GuVs107l9y0lRmVgT2j5AmgQsTE5OQkkJtKjqxNNDZ22TMgXMDTZylpSrr1vlmlfmRW6F7k6U/feQpPqcq2y9lK1/OezPumT/YXi1nITfx3V78ejz1Sw6ySYmZlZSMdH8Pk+RYXFjcFVPQjVBZd6yLzEfIW5Lk9qfGDL0j3NzSKu+03izmMlguGuUuGT9gLBxepcvpLM5ry1icmAP0cYbWh6ehqgJ9KxY0cJ7GIdZCwBWhpbkMuSL7MJNEk2gbpsG1/dlSNQnC6QCXqqyYzzeywZRyr0m802WUYcYlPw+HMVhFvSQFE/IRKJLMaPIAgI6Zug4IlhNVlwknoKp5Z8wyokYnN5KgaZKeNoOTwxwWWJFFxmsmjzxtV0xsKVIsBlp2FNQgqEHFYU+x+M6OmALbPlswAAAABJRU5ErkJggg==',
      },
      price: 1229,
      slug: {
        _type: 'slug',
        current: 'apple-watch-hermes',
      },
      title: 'Apple Watch Hermès',
    },
    {
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
        lqip: 'data:image/png;base64,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',
      },
      price: 799,
      slug: {
        _type: 'slug',
        current: 'ipad-pro',
      },
      title: 'iPad Pro',
    },
    {
      _createdAt: '2022-09-15T15:50:58Z',
      _id: 'a096a18c-6aaf-4262-affd-362af8c58869',
      _rev: 'KpVJuUj0Yf784nHVxaM4rn',
      _type: 'product',
      _updatedAt: '2022-09-22T14:51:19Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: {
        _ref: 'image-ac50976db2f8f51f6d96a03ead562925214deeaf-640x800-webp',
        lqip: 'data:image/png;base64,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',
      },
      price: 599,
      slug: {
        _type: 'slug',
        current: 'ipad-air',
      },
      title: 'iPad Air',
    },
    {
      _createdAt: '2022-09-15T15:51:26Z',
      _id: '6621d635-17b4-4520-989a-cb03f60e3fae',
      _rev: 'JZHoOarFe2lt6noMbip2lR',
      _type: 'product',
      _updatedAt: '2022-09-22T14:51:36Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: {
        _ref: 'image-ed3149100d376ab408b3fc275792efaca1e2db9d-640x800-webp',
        lqip: 'data:image/png;base64,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',
      },
      price: 329,
      slug: {
        _type: 'slug',
        current: 'ipad',
      },
      title: 'iPad',
    },
    {
      _createdAt: '2022-09-15T15:51:51Z',
      _id: '0f4cd93f-fd16-4f69-899f-959e10483773',
      _rev: '7QRoBHgb4U1Nb3n6kZG8dW',
      _type: 'product',
      _updatedAt: '2022-09-22T14:51:51Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: {
        _ref: 'image-5e6a079440735eaa9ebe25a4c3c99018af55f29c-640x800-webp',
        lqip: 'data:image/png;base64,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',
      },
      price: 499,
      slug: {
        _type: 'slug',
        current: 'ipad-mini',
      },
      title: 'iPad mini',
    },
  ],
} as IPromo;
