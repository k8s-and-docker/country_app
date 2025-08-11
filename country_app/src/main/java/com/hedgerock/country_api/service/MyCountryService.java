package com.hedgerock.country_api.service;

import com.hedgerock.country_api.client.CountryApiClient;
import com.hedgerock.country_api.dto.CountryDTO;
import com.hedgerock.country_api.entity.CountryDocument;
import com.hedgerock.country_api.entity.CountryEntity;
import com.hedgerock.country_api.repository.CountryJpaRepository;
import com.hedgerock.country_api.repository.mongo.CountryMongoRepository;
import com.mongodb.client.MongoClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class MyCountryService implements CountryService{

    private final CountryApiClient countryApiClient;
    private final CountryMongoRepository countryMongoRepository;
    private final CountryJpaRepository countryJpaRepository;
    private final MongoClient mongo;

    @Override
    public void processCountries() {
        final List<CountryDTO> countryDTOS = countryApiClient.getAllCountries();

        final List<CountryDocument> countryDocuments = countryDTOS.stream()
                .filter(country -> !country.alpha2().contains("P"))
                .map(CountryDTO::toMongoDocument)
                .toList();

        final List<CountryEntity> countryEntities = countryDTOS.stream()
                .map(CountryDTO::toJpaEntity)
                .toList();

        countryMongoRepository.deleteAll();
        countryJpaRepository.deleteAll();

        countryMongoRepository.saveAll(countryDocuments);
        countryJpaRepository.saveAll(countryEntities);
    }

    @Override
    public List<CountryDTO> getAllCountries() {
        final List<CountryEntity> countryEntities = countryJpaRepository.findAll();

        if (CollectionUtils.isEmpty(countryEntities)) return Collections.emptyList();

        return countryEntities.stream()
                .map(CountryDTO::fromJpaEntity)
                .toList();
    }

    @Override
    public CountryDTO getDetailsByAlpha2Code(String alpha2Code) {
        final CountryDocument document = countryMongoRepository.findByAlpha2(alpha2Code);

        if (Objects.nonNull(document)) return CountryDTO.fromMongoDocument(document);

        return CountryDTO.fromJpaEntity(countryJpaRepository.findByAlpha2(alpha2Code));
    }
}
