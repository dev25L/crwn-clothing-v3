import './directory-styles.scss'
import CategoryItem from "../category-item/category-item.component";


const Directory = ({categoties})=> {
  return(
    <div className="categories-container">
      {categoties.map((category) => (
        <CategoryItem category={category}  key={category.id}/>
      ))}

    </div>
  )
}

export default Directory;
