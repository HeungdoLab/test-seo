export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

/* LIKE */
export const GA_LIKE_CATEGORY = "Like";
export const GA_LIKE_ACTION_SET = "set_like";
export const GA_LIKE_ACTION_UNSET = "unset_like";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
