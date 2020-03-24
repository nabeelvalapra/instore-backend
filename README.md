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
### GET /api/v1/product-category/
```
  [{
    "name": :category-name,
    "id": :categroy_id,
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
    "image": :image_url
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
