(function (app) {

    var ListController = function ($scope, UrunServis) {

        UrunServis.hepsiGetir().success(function (data) {
            $scope.uruns = data;
        })//Urun servisi üzerinden tüm kayıtları getiren fonksiyon.

        $scope.Olustur = function () {
            $scope.ekle = {
                uruns: {
                    UrunAd: "urun adi",
                    UrunMiktar: 1,
                    UrunFiyat: 100
                }
            };
        }//yeni bir ürün oluşturmak istediğinizde veri giriş alanları (inputların )

        $scope.delete = function (uruns) {
            UrunServis.delete(uruns).success(function () {
                //UrunServis üzerinden sil işlemi için uruns(ürünü) gönderiyoruz
                for (var i = 0; i < $scope.uruns.lenght; i++) {//eğer başarılı bir ürün silme gerçekleşti ise 
                    if ($scope.uruns[i].Id == uruns.Id) {
                        $scope.uruns.splite(i, 1);//döngü ile verileri tekrar dönüyoruz ve 
                        //splite fonksiyonu ile silmek istediğim üzünden sonra 1 tane sil buda silmek istediğimiz ürün oluyor.
                    }
                }
            })
        }//

    }


    app.controller("ListController", ListController);//Controllerı kaydettik.

}(angular.module("UrunModul")))