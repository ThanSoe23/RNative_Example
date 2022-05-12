import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGuidTile from "../components/CategoryGuidTile";
import MealsOverviewPage from "./MealsOverviewPage";

function CategoriesPage({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryGuidTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesPage;
