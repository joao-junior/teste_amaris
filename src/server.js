import app from './app';

app.listen(process.env.PORT_SERVER, () => {
  console.log(`Server is running in  port ${process.env.PORT_SERVER}`);
});
