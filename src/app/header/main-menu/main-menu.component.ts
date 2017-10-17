import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input('categories') categories: any;
  menuItems: any;

  constructor() { }

  ngOnInit() {
    this.menuItems = this.getMenuItems();
  }

  getMenuItems() {
    return this.categories.reduce((newObj, category) => {
      const cat = {
        id: category.id,
        name: category.name
      };
      if (category.ancestors.length === 0) {
      // If items do not subcategories
      newObj.push({ category: cat});
      } else {
        // Sort out subcategories depends on ancestor ids
        category.ancestors.forEach(item => {
          if (item.typeId === 'category') {
            newObj.forEach(obj => {
              if (item.id === obj.category.id) {
                if (obj.subCategories && obj.subCategories.length) {
                  obj.subCategories.push(cat);
                } else {
                  obj.subCategories = [cat];
                }
              }
            });
          }
        });
      }
      return newObj;
    }, []);
  }
}
