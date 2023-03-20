
import CategoryItem from "../components/category-item/category-item.component"
import './directory.styles.scss'

export default function DirectoryComponent({categories}){
  return (
      <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>

  )
}
