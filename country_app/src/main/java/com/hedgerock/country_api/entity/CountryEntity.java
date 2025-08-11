package com.hedgerock.country_api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="countries")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CountryEntity {
    @Id
    private String alpha2;
    private String alpha3;
    private String capital;
}
