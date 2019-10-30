SELECT
	domains.domain_id,
    domains.url,
    domains.https,
    domains.www,
    domains.expiration_date,
    domains.buy_date,
    domain_status.domain_status_id,
    domain_status.domain_status_text,
    domain_status.hexcolor,
    user_domains.user_id,
    user_domains.domain_role_ids
FROM
	user_domains
    LEFT JOIN domains ON domains.domain_id = user_domains.domain_id
    LEFT JOIN domain_status ON domain_status.domain_status_id = domains.domain_status_id
WHERE
	user_domains.user_id = 2