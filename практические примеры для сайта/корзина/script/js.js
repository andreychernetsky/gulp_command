document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.search');
  const cartBtn = document.getElementById('cart');
  const wishlistBtn = document.getElementById('wishlist');
  const goodsWrapper = document.querySelector('.goods-wrapper')
  const createCardGoods = () => {
    const card = document.createElement('div');
    card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
    card.innerHTML = `		<div class="card">
									<div class="card-img-wrapper">
										<img class="card-img-top" src="img/temp.png" alt="">
										<button class="card-add-wishlist"></button>
									</div>
									<div class="card-body justify-content-between">
										<a href="#" class="card-title">Имя товара</a>
										<div class="card-price">100000 ₽</div>
										<div>
											<button class="card-add-cart">Добавить в корзину</button>
										</div>
									</div>
								</div>`;
    return card;
  };
 goodsWrapper.append(createCardGoods());//создаем карточки
 goodsWrapper.append(createCardGoods());
 goodsWrapper.append(createCardGoods());
});