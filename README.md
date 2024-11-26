# Web profile Dự án được viết từ react + typescript + ts 
## Cài đặt

1 sử dụng thư viện thông báo [toast] 
```bash
npm i react-toastify
```

2 sử dụng thư viện thông báo [emailjs] 
```bash
npm i emailjs
```

3 sử dụng thư viện thông báo [Material UI ] 
```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Sử dụng
1 [toast]
2 [emailjs]
```bash
var templateParams = {
  name: 'James',
  notes: 'Check this out!',
};

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
```
