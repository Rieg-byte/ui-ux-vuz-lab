import Button from "./components/Button";

const Home = () => {
  return (
    <div>
      Домашняя страница
      <Button
        label="Нажми меня"
        onClick={() => alert('Кнопка нажата!')}
        color="blue"
        size="large"
        />
    </div>
    
  )
}

export default Home