# Web profile Dự án được viết từ react + typescript + ts 
#demo
```https://web-profile-beige.vercel.app/```
## Cài đặt

1 sử dụng thư viện thông báo [toast] 
```bash
npm i react-toastify
```

2 sử dụng thư viện gửi gmail [emailjs] 
```bash
npm i emailjs
```

3 sử dụng thư viện hỗ trợ darkmode [Material UI ] 
```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Sử dụng
### 1 : toast
```bash
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

```
### 2 : emailjs
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
### 3 : darkmode Material UI 
```bash
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  );
}

```

