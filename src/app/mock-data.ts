// Categories (GET categories)
export const CATEGORIES = [
  {
    id: 1,
    name: {
      en: 'Men'
    },
    ancestors: []
  },
  {
    id: 2,
    name: {
      en: 'Women'
    },
    ancestors: []
  },
  {
    id: 3,
    name: {
      en: 'Clothing'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 1
      },
      {
        typeId: 'category',
        id: 2
      }
    ],
  },
  {
    id: 4,
    name: {
      en: 'Shoes'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 1
      },
      {
        typeId: 'category',
        id: 2
      }
    ],
  },
  {
    id: 5,
    name: {
      en: 'Bags'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 1
      },
      {
        typeId: 'category',
        id: 2
      }
    ],
  },
  {
    id: 6,
    name: {
      en: 'Parfumes'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 1
      },
      {
        typeId: 'category',
        id: 2
      }
    ],
  },
  {
    id: 7,
    name: {
      en: 'Sunglasses'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 1
      },
      {
        typeId: 'category',
        id: 2
      },
      {
        typeId: 'category',
        id: 9
      }
    ],
  },
  {
    id: 8,
    name: {
      en: 'New'
    },
    ancestors: []
  },
  {
    id: 9,
    name: {
      en: 'Accessories'
    },
    ancestors: []
  }

];
