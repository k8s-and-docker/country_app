package com.hedgerock.country_api.repository;

import com.hedgerock.country_api.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryJpaRepository extends JpaRepository<CountryEntity, String> {
    CountryEntity findByAlpha2(String alpha2);
}
