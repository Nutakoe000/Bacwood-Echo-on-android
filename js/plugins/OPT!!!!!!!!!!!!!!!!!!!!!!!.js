/*:
 * @target MZ
 * @plugindesc Отображение кастомных плашек персонажей в меню из папки img/face-menu
 * @help Называйте картинки так же, как зовут персонажей в базе данных.
 */

(() => {
    Window_MenuStatus.prototype.drawItemStatus = function(index) {
    };


    Window_MenuStatus.prototype.drawItemImage = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRect(index);
        

        const bitmap = ImageManager.loadBitmap("img/face-menu/", actor.name());

        bitmap.addLoadListener(() => {

            this.contents.blt(
                bitmap, 
                0, 0, bitmap.width, bitmap.height, 
                rect.x, rect.y, rect.width, rect.height 
            );
        });
    };
})();

(() => {
    const _Window_ItemList_drawItemNumber = Window_ItemList.prototype.drawItemNumber;
    Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
        // Проверяем, есть ли у предмета заметка <noAmount>
        if (item && item.note.includes("<noAmount>")) {
            return; // Просто ничего не рисуем
        }
        _Window_ItemList_drawItemNumber.call(this, item, x, y, width);
    };
})();