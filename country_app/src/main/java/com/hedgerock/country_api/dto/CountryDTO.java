package com.hedgerock.country_api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.hedgerock.country_api.entity.CountryDocument;
import com.hedgerock.country_api.entity.CountryEntity;
import lombok.Builder;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;

@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public record CountryDTO(
        @JsonProperty("cca2")
        String alpha2,
        @JsonProperty("cca3")
        String alpha3,
        String region,
        List<String> capital,
        String subregion,
        Integer area,
        Integer population,
        Boolean independent
) {

    public static CountryDTO fromJpaEntity(CountryEntity countryEntity) {
        if (Objects.isNull(countryEntity)) return null;

        return CountryDTO.builder()
                .alpha2(countryEntity.getAlpha2())
                .alpha3(countryEntity.getAlpha3())
                .capital(StringUtils.hasText(countryEntity.getCapital())
                        ? List.of(countryEntity.getCapital())
                        : null
                )
                .build();
    }

    public CountryEntity toJpaEntity() {
        return CountryEntity.builder()
                .alpha2(alpha2)
                .alpha3(alpha3)
                .capital(CollectionUtils.isEmpty(capital) ? null : capital.get(0))
                .build();
    }

    public static CountryDTO fromMongoDocument(CountryDocument countryDocument) {
        if (Objects.isNull(countryDocument)) return null;

        return CountryDTO.builder()
                .alpha2(countryDocument.getAlpha2())
                .alpha3(countryDocument.getAlpha3())
                .capital(StringUtils.hasText(countryDocument.getCapital())
                        ? List.of(countryDocument.getCapital())
                        : null
                )
                .region(countryDocument.getRegion())
                .subregion(countryDocument.getSubregion())
                .area(countryDocument.getArea())
                .population(countryDocument.getPopulation())
                .independent(countryDocument.getIndependent())
                .build();
    }

    public CountryDocument toMongoDocument() {
        return CountryDocument.builder()
                .alpha2(alpha2)
                .alpha3(alpha3)
                .capital(CollectionUtils.isEmpty(capital) ? null : capital.get(0))
                .region(region)
                .subregion(subregion)
                .area(area)
                .population(population)
                .independent(independent)
                .build();
    }

}
