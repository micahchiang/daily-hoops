import app from './src/app';

const port = 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`listening on port ${port}`);
})