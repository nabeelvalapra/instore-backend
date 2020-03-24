# Instore Plus - Engineering Wiki

## API Endpoints

### POST /api/v1/mobile-login/
```
  {
    "number": :phone_number
  }
```
### POST /api/v1/mobile-otp/
```
  {
    "otp": :otp
  }
```
### GET /api/v1/preferences/
```
  {
    "all-options": [:option1, :option2, :ioption3, ...],
    "selected-options":  [:option1, :option2, ...]
  }
```
### POST /api/v1/set-preferences/
```
  {
    "selected-options": [:option1, :option2, :ioption3, ...]
  }
```
### GET /api/v1/product-category/
```
  [{
    "name": :category-name,
    "id": :categroy_id,
    "image": :category_thumbnail,
    "order": :order_number
   }, ...]
```
### GET /api/v1/product-carousel/
```
  [{
    "name": :product-name,
    "id": :product_id,
    ...
   }, ...]
```
### GET /api/v1/spotlight/?tag=top
```
  Arg:
    - tag: top/bottom/middle
  {
    "image": :image_url,
    "tag": :tag
  }
```
### GET /api/v1/product/
```
  Params:
    - tags:
    -
    -
  Response:
    {}
```
