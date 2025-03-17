import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'lucide-vue-next';

const empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR3SURBVHgB3ZrdUdtAEMf3lOQtD04HSgWYCiI/JJk8BUEBkAqACrArSFxBTAMIP2WAzKAOMBXkUkF4IZMJoMt/0cmRhT7OurP5+M1oZMsn6f5e3Wpv9wQ55DiKuoIoUEKskFJdHOpg8wvNJG+KaOIR/cQ+fheGE3KEIEtOoihIiD6ic1sqFdAGiS3GNrQV11oQC4GAPXwMyC0siIWNqAVzC1qgkCLyBVGvF4ZynpOMBZ1GUecaQiBmh5YIOvjlOdEAwi4M2zcDMf4VdnR3gC8LY2s1CoKYLixzajHgXcEW6jU5Da/ux6PxeBOWOXsAYhjuw9l39KmuUaWF2DIshh4mq1WWKrUQj5nrdMw8VE65j2U/3LEQezNtGZ/sifHSPce/NsGNOje4Jj6/wfEu2cOOYrXo/Z4XW12n7xif7GABu2/DMC77Ub/Lvlrex9d93c0fnLGQds8/yAal9t+tr2+ZND06OBgJITbJAgjo5f+4mTF0ZT9uJqZimPdp25gs0FHLlKkgRMpbZPmoYYyENCc45xPZEfAjnH3JW2ibLMA/Nf4wZ9zF6HNisiBvpVtBPI8hS8+DZ/mQ2rNPdkytlFnIyjqMSOc0Sz83Qym1xvtMUECPHe0tPf24+WSJsIj3hJtYscNavMSRdRKlAmoJT+HJAazF81zNcWByDpuoHQE5wENyhsfQCrmh8zdJ5p7NnozHLkKtFGSaPGcXA8Lz9prmK3l4vqWSpE/u6DgVxCRJMsI7Ya+p3fF4vC3QltziC3gGRYtBYhsQx3d6MvYNwS/C+zWVOoGAFsAiBd0LHj0xWJCkp4NkQUYJvEeC9DCAzumpoNQ5C3JWyrhvEiEkhz4xPRFYy22SBK77FznOjuLCF+r/+JR67xf2LpF4373O0lg8Y2w9ydOd59TVmCtyl7h42FAtiBDIvkxnyV0Etm+yCVprhIh1X6Z5srkzPiwEIfvwN0oeoWG5owqOIp6l0UPbYPU2PTzNy+GxY0GB8enIv10KsWMrpAgLw1joo2Pz5Os4vFrlD9PMKS4wUIaCECEP3m9s9GkB6CzQ1lEUSVHIudUwzD7MZE4NrcRV6x4tAcP+3DqD7MtMLCfS6LgWB4lBY0zuhTYzf+6MIJ0jHtacP2mTTGyLvlf1i1+pYbE/d6JtlCj69LAC1iqnI+GU+sWDpRU87UK5RnTnZQvBr3qOPVsVVdUQfl2glLJa9rSUzod0w9KBf53WdZYC7vW57Di8ca/q0a+ssTK6IlEmYAJLhb0FjSdtGb5vUPyNHcWHmlUmjWV9nVll91kW641epIsiJDlAL+7gEGynWHnX4VVjWb9REKPHVN3CixFZLDwyWAAlb2oeszxGghhdTO5TfRArscVcKxLpC29Sdp0/6DTHbWi3gnYclPqVV4RrZm8Wulwak8fAWmVIfbOOMp+m8NxmUFV4rmJuQRnaYbC1XJTo87QSktFaUAY7DV6hJdL1Bz61gAc8xsg+LH/YVkjuWu7IlmjqBRZcBPCpfInmBSZkE4Gkhuslmv8ANjG9I1JHv7oAAAAASUVORK5CYII=";

const photo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABDCAYAAADEfbZbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAX4SURBVHgB3Vs9euM2EH10to+TTXpeIN/KJwi3TaWcwEy3qaycwHaXzk6qdMqeQHaKtNKeQMoJxNQrr+wDrLEz4ICEqB/+AJQpve8bWwRBkI8zGGAGIHB4OCUZkIxI5iRKZCplMY4QfZIlcrLbhF9IjCPBDcoJF+USBw4msJXgxTuowbut529woIhRotnxP6nsqNMvNvoKLUIttSOK8IwfwU4pQA+pcwoLVRORR3rM/3CCGf2eBd/oMh/mOiSZ6PYFJ/AMIhuRXKpP5GUVORmFcyoO6E4f6O8vJG+DbxHYwmUk1yTv00ZwQTL983ftpEK4g192DN9gzaoFYiI7JlmqB1zxC4Ajvv8OY1RwYhVMneXObtvZ1Ikga+dKmydpjcxzAk/4uNCaWgE5MvR/Wi3r/ZD+J/IruP8XuP0rO3xjn2tMXGtUUd9R1A8D/OyTsIVesSAI0BQhXKDNeokbMum5D3Muux38mbqyG67l3IhoyE6HvDQ7pLOWtGwjgT/M7IPKxMW02VP/EbzGgEg/on3M4A//2weViBPpcyI80kPRa9xif/gAf7irVZtJS38OsX+wVy8NSga/7pyymqClOvRk5OVIG/B0UzlKjKpgsnoyslwfUl4A3L2akr5CVeghizX9oAP+ruAKNUlz1CbxQjXocXqpJ/ZdQ4zVrMs2Yb/QJ8XdklQLSzvSr8sQI00zcbrJdmBcxlaqtZxZbpWJllSMcSQwitxdKY2wRjgy6Khxl79q08SVUj2SsdoOPheiBYjWlxsdnYmn0QKYkKqOVoZPrfXFhi7MGZO2oi1L07ckpxvOn8o5rXm0ANH6uFgYljqAujdKtRyRxJY2wx31T616sVzrVfti7lFekI53zsGHkL0hWW4w4dL2La3b4LaGykP/1ymxB2sm58PMVeq8bMJzMXF+6LhGO6ztkVw7LbTnZAFi7lNzoOfkcIBoem76qPLonaXtkaX9EA7IvDt5ur6rNxetMlqbA1jknbokz1OIeP9EJ/mVc8BvVip+Q3swbZ/DBYoyMc+IXhHxN1kiv0k7ab/jIWoWBEFSob5J7pt0L7/0SfFaqneBNMvKKa5rPk9lXIdNP6xyr80PQOmsr2hlRw/sDo5Nhh3dtyvULTrArY6rUK8vZWM5jtAQnF9gB8d59RB+s5mbb5g6JX45rPEJyXv5zabLpJnUmaXJM0ArJKGyiZSZBGf1GHsdj/p6Yq/gAJVPUIYl9Ybb6ql8/C5r42+pF8PlmYmz90XDHTAO8HrDudtCndaxT+LaPDc5JavMxYRrYZ/EE/6zyTFZZT4XEHaCiSd7SjOZIXNoz77kt+nb92gZwjVhr556ufbB/Zg9eEgyJ8ITKTfzgAQoDZS+lv8uy1ch3+tEb7347JQ7T6wGt4L6MT/sW+Saj0SY9B3JmdTZBaOg5sQ/6zaeUo0HTsQrj63ixHj4u0K+9j2pQNgf0in6zAQp9RbULKg8geAU4VW8l5nNNe6aMlPtm9yza1g6d51KVriHmSg5ZYokLA3NwdRxvj6w5twhPEOtxvsxGmIlEaELiimZJo3mAQQ/IKefIpeXIGQ5qLm0THwKB6yl2EzeGQ6Qvm7m0m2AExFOw+7GdQPX8DRrJ9U0v4Cpys2zCebSBgcwERyxZubWidYWFLoAUWy8fkK8+x62cO0dpesGVGFwjFqXBGNcVml+TFqXNcHysd/aGLC32LgtGBOvrMhaWyg6DOIwrLU01tHNP7XAu6obWW7HtnvVgqSQl40TLNZOghAHgtr9ekdD8QHsgtLISC88bV6yyHfW7DPzXnjesZWZfQcdnuXIIrSBzJR4mOiA6Re+lgjrXFsrr66/Awv0mtYT5a3G3s2qBrIPB/KvJRLsA9kML50Hh9gTzO6lF59aZ47PUzy/4z6R9V1bd/yMvICp+IAbL0mN/KvFpYmnfcUQzb/i2gJt9s+kkUB/TxqC18N4q0n6vSjnz5Nif5SuwoR6dC3v0ODjiOvStfd07cT3F0/eidsQQkymp7ec5B/UhoWqCdIPavnlPDFRQJNtbaHhC1L+dyC2Zw6bAAAAAElFTkSuQmCC";

const _sfc_main = {
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    const recipientAdded = ref(false);
    const recipient = ref({
      name: "",
      surname: "",
      passport: "",
      phone: "",
      phone_second: "",
      email: "",
      address: "",
      zip: "",
      apartament: "",
      ofice: "",
      city: ""
    });
    const tabs = ref([
      { key: "parcels", label: "Получатель", filters: ["В процессе", "Доставленные", "Ожидание оплаты"] },
      { key: "purchase_help", label: "Отправитель", filters: ["В процессе", "Приобретенные покупки", "Подтвержденные покупки", "Одобренные товары"] }
    ]);
    const selectedTab = ref("parcels");
    ref("");
    computed(() => {
      const tab = tabs.value.find((t) => t.key === selectedTab.value);
      return tab ? tab.filters : [];
    });
    const orders = computed(() => {
      return [];
    });
    const showPopup = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "parcels-page" }, _attrs))} data-v-d9286324><div class="tabs" data-v-d9286324><!--[-->`);
      ssrRenderList(tabs.value, (tab, index) => {
        _push(`<button class="${ssrRenderClass({ active: selectedTab.value === tab.key })}" data-v-d9286324>${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><div class="divider" data-v-d9286324></div>`);
      if (orders.value.length === 0) {
        _push(`<div class="empty-state" data-v-d9286324>`);
        if (recipientAdded.value) {
          _push(`<div class="recipient-card" data-v-d9286324><div class="recipient-info" data-v-d9286324><h3 data-v-d9286324>${ssrInterpolate(recipient.value.name)} ${ssrInterpolate(recipient.value.surname)}</h3><p data-v-d9286324>Регион: ${ssrInterpolate(recipient.value.address)}</p><p data-v-d9286324>Район: ${ssrInterpolate(recipient.value.phone)}</p><p data-v-d9286324>Улица: ${ssrInterpolate(recipient.value.address)}</p><p data-v-d9286324>Паспорт: ${ssrInterpolate(recipient.value.address)}</p><p data-v-d9286324>Номер: ${ssrInterpolate(recipient.value.address)}</p><p data-v-d9286324>Дом: ${ssrInterpolate(recipient.value.address)}</p><p data-v-d9286324>Квартира: ${ssrInterpolate(recipient.value.address)}</p><p data-v-d9286324>ZIP-код: ${ssrInterpolate(recipient.value.address)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${ssrRenderAttr("src", unref(empty))} alt="Нет заказов" class="empty-image" data-v-d9286324><p class="empty-text" data-v-d9286324>Здесь пока нет ни одного получателя :( <br data-v-d9286324> Пожалуйста укажите адреса получателей ваших посылок</p><button data-v-d9286324>+ Новый адрес</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showPopup.value) {
        _push(`<div class="popup-overlay" data-v-d9286324><div class="popup" data-v-d9286324><h2 data-v-d9286324>Добавить получателя</h2><form data-v-d9286324><div class="popup-overlay-item-wrapper" data-v-d9286324><div class="popup-overlay-item" data-v-d9286324><h4 data-v-d9286324>Данные</h4><div class="form-group" data-v-d9286324><input type="text" placeholder="Имя"${ssrRenderAttr("value", recipient.value.name)} required data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="text" placeholder="Фамилия"${ssrRenderAttr("value", recipient.value.surname)} required data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="text" placeholder="Серия и номер паспорта"${ssrRenderAttr("value", recipient.value.passport)} required data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="number"${ssrRenderAttr("value", recipient.value.phone)} placeholder="+998" data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="number"${ssrRenderAttr("value", recipient.value.phone_second)} placeholder="+998" data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="email" placeholder="E-mail"${ssrRenderAttr("value", recipient.value.email)} data-v-d9286324></div><h5 data-v-d9286324>Передняя часть паспорта</h5><img${ssrRenderAttr("src", unref(photo))} alt="photo" data-v-d9286324></div><div class="popup-overlay-item" data-v-d9286324><h4 data-v-d9286324>Адрес</h4><div class="form-group" data-v-d9286324><input type="text" placeholder="Адрес"${ssrRenderAttr("value", recipient.value.address)} required data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="text" placeholder="Апартамент"${ssrRenderAttr("value", recipient.value.apartament)} required data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="text" placeholder="Регион"${ssrRenderAttr("value", recipient.value.region)} required data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="text"${ssrRenderAttr("value", recipient.value.city)} placeholder="Город / Район" data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="text"${ssrRenderAttr("value", recipient.value.ofice)} placeholder="Квартира / Офис " data-v-d9286324></div><div class="form-group" data-v-d9286324><input type="number" placeholder="ZIP-код"${ssrRenderAttr("value", recipient.value.zip)} data-v-d9286324></div><h5 data-v-d9286324>Задняя часть паспорта</h5><img${ssrRenderAttr("src", unref(photo))} alt="photo" data-v-d9286324></div></div><div class="popup-actions" data-v-d9286324><button type="button" data-v-d9286324>Отменить</button><button type="submit" data-v-d9286324>Продолжить</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const address = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9286324"]]);

export { address as default };
//# sourceMappingURL=address.vue.mjs.map
