import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const categories = [
			{
				"id": 1,
				"title": "Всякие фигульки",
				"economy": 2,
				"subCat": [
					{
						"id": 11,
						"title": "Дни рождения",
						"economy": 1
					},
					{
						"id": 12,
						"title": "Свадьбы",
						"economy": 2
					}
				]
			},
			{
				"id": 2,
				"title": "Детки",
				"economy": 2,
				"subCat":[
					{
						"id": 21,
						"title": "Игрушки",
						"economy": 3
					},
					{
						"id": 22,
						"title": "еда",
						"economy": 3,
						"subCat": [
							{
								"id": 231,
								"title": "Фрукты",
								"economy": 1,
								"subCat": [
									{
										"id": 241,
										"title": "Цитрусовые",
										"economy": 2
									},
									{
										"id": 242,
										"title": "Ягоды",
										"economy": 1
									}
								]
							},
							{
								"id": 32,
								"title": "Напитки",
								"economy": 1
							}
						]
					}
				]
			},
			{
				"id": 3,
				"title": "Забота о себе",
				"economy": 0,
				"subCat": [
					{
						"id": 31,
						"title": "Здоровье и Фитнесс",
						"economy": 3,
						"subCat": [
							{
								"id": 311,
								"title": "Басейн",
								"economy": 2
							},
							{
								"id": 312,
								"title": "Сауна",
								"economy": 2
							}
						]
					},
					{
						"id": 32,
						"title": "Поездки в лес",
						"economy": 2
					}
				]
			},
			{
				"id": 4,
				"title": "Квартира (дом)",
				"economy": 3
			},
			{
				"id": 5,
				"title": "Благотворительность",
				"economy": 1
			}
		]
		return {categories};
	}
}