using FluentMigrator;

namespace Stamp.Host.Migrations.DataMigrations
{
    [Migration(202512121500)]
    public class M202512121500_InsertCodesInitData : StampMigrationBase
    {
        public override void Up()
        {
            Insert.IntoTable("Country").Row(new { Id = Guid.NewGuid(), Code = "Ru", Description = "Россия" });

            Insert.IntoTable("Catalog").Row(new { Id = Guid.NewGuid(), Code = 0, Description = "АО Марка" });
            Insert.IntoTable("Catalog").Row(new { Id = Guid.NewGuid(), Code = 1, Description = "Соловьев" });
            Insert.IntoTable("Catalog").Row(new { Id = Guid.NewGuid(), Code = 2, Description = "Загорский" });

            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 0, Description = "Плотная" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 1, Description = "Тонкая" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 2, Description = "Простая" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 3, Description = "Кремовая" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 4, Description = "Х/б" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 5, Description = "Мелованная" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 6, Description = "СлабоМелованная" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 7, Description = "Белая" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 8, Description = "Серая" });
            Insert.IntoTable("Paper").Row(new { Id = Guid.NewGuid(), Code = 9, Description = "Цветная" });

            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("361e8acf-c597-41cb-b8d2-f644a16017f0"), Code = 0, Description = "Птицы" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("72eb7596-506b-41f7-beda-ac9cee5cfdd8"), Code = 1, Description = "Млекопитающиe" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("f0a83e90-4a1d-44fc-bf61-1cdbedb4d47c"), Code = 2, Description = "Рыбы" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("4ea363d2-bbaa-494a-8ac8-d4086daf2625"), Code = 3, Description = "Бабочки" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("6ab7bf15-d4e0-42c4-91bf-70b74243e892"), Code = 4, Description = "Цветы" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("3d6e1d99-128f-414e-a5ee-241d8de08003"), Code = 5, Description = "Изобр.искусство" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("e39fed6b-6756-42b0-9699-fa94f8b9ae01"), Code = 6, Description = "Метро" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("77f417e6-9652-4d16-ab42-c042285812d3"), Code = 7, Description = "Самолеты" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("914ff143-871e-4360-9e5c-847f7776851d"), Code = 8, Description = "Корабли" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("af043045-ba18-40a5-86ac-8c026ef99c63"), Code = 9, Description = "Под.лодки" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("3455c814-c8d6-4787-a5f1-d6bf672b902a"), Code = 10, Description = "Авто" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("4a828f20-2fb9-4fbf-9d1c-646e781cef44"), Code = 11, Description = "Ж/д" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("2e90e2d0-32a6-4296-94e9-82e9ae8a6b87"), Code = 12, Description = "Футбол" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("b446fb46-fff1-4cbf-a7ab-0e1aacd58c6e"), Code = 13, Description = "Плавание" });
           
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("d37c8167-48f9-4140-bfcf-7ff7be653f62"), Code = 14, Description = "Насекомые" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("57874897-47fb-4300-9a2c-8e67f2e0c1c7"), Code = 15, Description = "Кошки" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("df35ca48-1ed1-4724-a16d-912d499a19db"), Code = 16, Description = "Собаки" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("69c5afb6-3e40-406b-8b33-8308877b2873"), Code = 17, Description = "Шахматы" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("87d86b9c-5e7c-4335-b259-9ccfcfc6b642"), Code = 18, Description = "Скульптура" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("20bce305-1dc8-4a0a-831b-153509ebe8d9"), Code = 19, Description = "Мосты" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("0f288783-bf3e-4e83-9be8-295e3c56bdce"), Code = 20, Description = "Реки и озера" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("d5374222-ba2c-4936-818a-2e044978bdc0"), Code = 21, Description = "Моря и океаны" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("30d274f9-99a4-4d99-83c2-0967c303a5be"), Code = 22, Description = "Космические аппараты" });
            Insert.IntoTable("SubTheme").Row(new { Id = new Guid("d4d6483c-7258-4d41-ac61-542d235a3b79"), Code = 23, Description = "Змеи" });

            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc279"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc280"), SubThemeId = new Guid("361e8acf-c597-41cb-b8d2-f644a16017f0"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc281"), SubThemeId = new Guid("72eb7596-506b-41f7-beda-ac9cee5cfdd8"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc282"), SubThemeId = new Guid("f0a83e90-4a1d-44fc-bf61-1cdbedb4d47c"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc283"), SubThemeId = new Guid("4ea363d2-bbaa-494a-8ac8-d4086daf2625"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc284"), SubThemeId = new Guid("d37c8167-48f9-4140-bfcf-7ff7be653f62"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc285"), SubThemeId = new Guid("57874897-47fb-4300-9a2c-8e67f2e0c1c7"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc286"), SubThemeId = new Guid("df35ca48-1ed1-4724-a16d-912d499a19db"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("199ea3da-7f7c-49f1-baa8-a6d0a32dc287"), SubThemeId = new Guid("d4d6483c-7258-4d41-ac61-542d235a3b79"), Code = 0, Description = "Фауна" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("e0cd3e28-785d-4893-b89f-1925a9ad4a08"), Code = 1, Description = "Флора" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("e0cd3e28-785d-4893-b89f-1925a9ad4a09"), SubThemeId = new Guid("6ab7bf15-d4e0-42c4-91bf-70b74243e892"), Code = 1, Description = "Флора" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("1064fe8f-ff46-4264-bb0b-41958eaea250"), Code = 2, Description = "Личности, известные люди" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("ed2389b3-21ff-4863-91aa-0db51a22e22b"), Code = 3, Description = "Главы государств" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("da207d1b-3594-47b1-b716-9e0b8acd5c12"), Code = 4, Description = "Годовщины и юбилеи" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("bc225d66-0692-4c39-aae4-199525e42fd1"), Code = 5, Description = "Спорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("bc225d66-0692-4c39-aae4-199525e42fd2"), SubThemeId = new Guid("2e90e2d0-32a6-4296-94e9-82e9ae8a6b87"), Code = 5, Description = "Спорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("bc225d66-0692-4c39-aae4-199525e42fd3"), SubThemeId = new Guid("b446fb46-fff1-4cbf-a7ab-0e1aacd58c6e"), Code = 5, Description = "Спорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("bc225d66-0692-4c39-aae4-199525e42fd4"), SubThemeId = new Guid("69c5afb6-3e40-406b-8b33-8308877b2873"), Code = 5, Description = "Спорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("0ced2ac2-2fe7-44ac-9880-7c821b7a1cb6"), Code = 6, Description = "Олимпийские игры" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("38f2fa64-dd5f-4c57-a04b-893d9e6f36d0"), Code = 7, Description = "Искусство" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("38f2fa64-dd5f-4c57-a04b-893d9e6f36d1"), SubThemeId = new Guid("3d6e1d99-128f-414e-a5ee-241d8de08003"), Code = 7, Description = "Искусство" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("38f2fa64-dd5f-4c57-a04b-893d9e6f36d2"), SubThemeId = new Guid("87d86b9c-5e7c-4335-b259-9ccfcfc6b642"), Code = 7, Description = "Искусство" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("5947bbb5-9074-4e95-9d11-2e50a50f1905"), Code = 8, Description = "Архитектура" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("5947bbb5-9074-4e95-9d11-2e50a50f1906"), SubThemeId = new Guid("e39fed6b-6756-42b0-9699-fa94f8b9ae01"), Code = 8, Description = "Строительство" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("5947bbb5-9074-4e95-9d11-2e50a50f1907"), SubThemeId = new Guid("20bce305-1dc8-4a0a-831b-153509ebe8d9"), Code = 8, Description = "Строительство" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("b5e4581d-106e-4df5-a9c6-bf62a3838180"), Code = 9, Description = "Транспорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("b5e4581d-106e-4df5-a9c6-bf62a3838181"), SubThemeId = new Guid("77f417e6-9652-4d16-ab42-c042285812d3"), Code = 9, Description = "Транспорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("b5e4581d-106e-4df5-a9c6-bf62a3838184"), SubThemeId = new Guid("3455c814-c8d6-4787-a5f1-d6bf672b902a"), Code = 9, Description = "Транспорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("b5e4581d-106e-4df5-a9c6-bf62a3838185"), SubThemeId = new Guid("4a828f20-2fb9-4fbf-9d1c-646e781cef44"), Code = 9, Description = "Транспорт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("f1f9cd69-1aa8-428b-899c-211a80abdcbd"), Code = 10, Description = "Новый год и рождество" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("e00e4a03-b25b-4fc8-963b-8fb869c7cedc"), Code = 11, Description = "Гербы и флаги" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("bcf06293-eda7-4bd0-a1ab-103a8f85dcfb"), Code = 12, Description = "Стандарт" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("31533b19-c1cf-456c-8aaa-e3cc1964f913"), Code = 13, Description = "Космос" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("31533b19-c1cf-456c-8aaa-e3cc1964f914"), SubThemeId = new Guid("30d274f9-99a4-4d99-83c2-0967c303a5be"), Code = 13, Description = "Космос" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("70ff66f5-fece-45c0-8673-6deb27fbbad0"), Code = 14, Description = "Религия" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("3ebcb84c-bc54-4c81-8ae8-16cf7c7739f5"), Code = 15, Description = "Флот" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("3ebcb84c-bc54-4c81-8ae8-16cf7c7739f6"), SubThemeId = new Guid("914ff143-871e-4360-9e5c-847f7776851d"), Code = 15, Description = "Флот" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("3ebcb84c-bc54-4c81-8ae8-16cf7c7739f7"), SubThemeId = new Guid("af043045-ba18-40a5-86ac-8c026ef99c63"), Code = 15, Description = "Флот" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("8b9ecac3-6e89-4739-b325-bf1b7d113c77"), Code = 16, Description = "Вода" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("8b9ecac3-6e89-4739-b325-bf1b7d113c78"), SubThemeId = new Guid("0f288783-bf3e-4e83-9be8-295e3c56bdce"), Code = 16, Description = "Вода" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("8b9ecac3-6e89-4739-b325-bf1b7d113c79"), SubThemeId = new Guid("d5374222-ba2c-4936-818a-2e044978bdc0"), Code = 16, Description = "Вода" });
            Insert.IntoTable("Theme").Row(new { Id = new Guid("bdbf6828-67d2-4368-99f4-656f1c0b08bb"), Code = 17, Description = "Вулканы" });

            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 0, Description = "Марка", Horizontal = 1, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 1, Description = "Марка с купоном", Horizontal = 1, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 2, Description = "Тет-бэш", Horizontal = 2, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 4, Description = "Квартблок", Horizontal = 2, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 5, Description = "Блок", Horizontal = 1, Vertical = 1 });

            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 5, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 5, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 4, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 4, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 4, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 3, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 5, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 3, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 3, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 3, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 2, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 5, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 2, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 4, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 2, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 2, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 2, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 1, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 1, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 3, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 4, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 1, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 5, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 6, Description = "Малый лист", Horizontal = 1, Vertical = 5 });

            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 10, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 10, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 5, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 5, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 5, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 4, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 4, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 4, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 3, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 5, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 3, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 3, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 3, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 2, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 5, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 2, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 4, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 2, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 2, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 2, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 1, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 1, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 3, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 4, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 1, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 5, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 7, Description = "Лист с оформленными полями", Horizontal = 1, Vertical = 5 });

            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 10, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 10, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 5, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 5, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 5, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 4, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 4, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 4, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 3, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 5, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 3, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 3, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 3, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 2, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 5, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 2, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 4, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 2, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 2, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 2, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 1, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 1, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 3, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 4, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 1, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 5, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 8, Description = "Лист", Horizontal = 1, Vertical = 5 });

            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 10, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 10, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 5, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 5, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 5, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 4, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 4, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 4, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 3, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 5, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 3, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 3, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 3, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 2, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 5, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 2, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 4, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 2, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 2, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 2, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 1, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 1, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 3, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 4, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 1, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 5, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 9, Description = "Лист с купоном", Horizontal = 1, Vertical = 5 });

            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 10, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 10, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 5, Vertical = 10 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 5, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 5, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 4, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 4, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 4, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 3, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 5, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 3, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 3, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 3, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 2, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 5, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 2, Vertical = 5 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 4, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 2, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 2, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 2, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 1, Vertical = 2 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 1, Vertical = 3 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 3, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 4, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 1, Vertical = 4 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 5, Vertical = 1 });
            Insert.IntoTable("StampType").Row(new { Id = Guid.NewGuid(), StampCode = 10, Description = "Лист с 2 купонами", Horizontal = 1, Vertical = 5 });
        }

        public override void Down()
        { }
    }
}