package com.hedgerock.country_api.repository.mongo;

import com.hedgerock.country_api.entity.CountryDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository("cassandraCountryRepository")
public interface CountryMongoRepository extends MongoRepository<CountryDocument, String> {
    CountryDocument findByAlpha2(String alpha2);
}
