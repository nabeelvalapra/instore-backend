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
### GET /api/v1/landing-section/
```
  [{
    "name": :section_name,
    "filter_tags": :filter_tags,
    "order": :section_order
    }, ...]
```
### GET /api/v1/product-category/
```
  [{
    "name": :category-name,
    "id": :categroy_id,
    "order": :order_number
   }, ...]
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
