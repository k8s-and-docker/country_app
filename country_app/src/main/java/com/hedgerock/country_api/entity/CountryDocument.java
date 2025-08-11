package com.hedgerock.country_api.entity;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CountryDocument {
    @Id
    private String alpha2;
    private String alpha3;
    private String capital;
    private String region;
    private String subregion;
    private Integer area;
    private Integer population;
    private Boolean independent;

}
